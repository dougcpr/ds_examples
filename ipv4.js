let ip_address = '192.168.1.120';
let example_mask = '192.168.0.0/26';

/* first split into octaves so you do staged bitwise operation */
let split_ip_address = splitIntoOctaves(ip_address);
let cidr = calculateCIDR(example_mask);
let example_split_mask_address = calculateNetworkMask(cidr);
let broadcast_mask = calculateBroadcastMask(32 - cidr);

/* calculate network address, used for determining range */
let subnet_address = bitwiseAnd(split_ip_address, example_split_mask_address);
let broadcast_address = calculateBroadcastAddress(subnet_address, broadcast_mask);

console.log('IP Address: ', split_ip_address.join('.'));
console.log('CIDR: ', cidr);
console.log('Mask: ', example_split_mask_address.join('.'));
console.log('Broadcast Mask: ', broadcast_mask.join('.'));
console.log('Subnet: ', subnet_address.join('.'));
console.log('Broadcast Address: ', broadcast_address.join('.'));

calculateRange(subnet_address, broadcast_address);

/* Extract 8 BIT DECIMALS to be converted into BINARY */
function splitIntoOctaves (_address) {
    _address = _address.split('/');
    if (_address[0]) {
        return _address[0].split('.');
    }
    return false
}

function calculateCIDR (_address) {
    _address = _address.split('/');
    if (_address[1]) {
        return _address[1]
    }
    return false
}

function calculateNetworkMask(cidr) {
    let temp = [];
    let mask = [];
    for (let j = 0; j < cidr; j++) {
        temp[j] = '1';
    }
    for (let i = cidr; i < 32; i++) {
        temp[i] = 0;
    }
    /* todo: rewrite this monstrosity */
    mask[0] = temp.slice(0, 8).join('');
    mask[1] = temp.slice(8, 16).join('');
    mask[2] = temp.slice(16, 24).join('');
    mask[3] = temp.slice(24, 32).join('');
    BtoD(mask);
    return mask
}

function calculateBroadcastMask(cidr) {
    let temp = [];
    let mask = [];
    for (let j = 0; j < (32 - cidr); j++) {
        temp[j] = '0';
    }
    for (let i = (32 - cidr); i < 32; i++) {
        temp[i] = 1;
    }
    /* todo: rewrite this monstrosity */
    mask[0] = temp.slice(0, 8).join('');
    mask[1] = temp.slice(8, 16).join('');
    mask[2] = temp.slice(16, 24).join('');
    mask[3] = temp.slice(24, 32).join('');
    BtoD(mask);
    return mask
}

/* BINARY to DECIMAL */
function BtoD (_address) {
    for (let i = 0; i <= 3; i++) {
        _address[i] = parseInt(_address[i], 2).toString(10);
    }
    return _address
}

/* DECIMAL to BINARY */
function DtoB (octave) {
    let temp = [];
    for (let i = 7; i >= 0; i--) {
        octave = octave - Math.pow(2, i);
        if (octave >= 0) {
            temp.push('1');
        } else {
            octave = octave + Math.pow(2, i);
            temp.push('0');
        }
    }
    temp = temp.join('');
    return temp
}

function bitwiseAnd(ip, mask) {
    let subnet = [];
    for (let i = 0; i < ip.length; i++) {
        subnet.push(ip[i] & mask[i]);
        subnet[i] = DtoB(subnet[i]);
    }
    for (let i = 0; i <= 3; i++) {
        subnet[i] = parseInt(subnet[i], 2).toString(10);
    }
    return subnet
}

function calculateBroadcastAddress(subnet, mask) {
    let broadcast = [];
    for (let i = 0; i < subnet.length; i++) {
        broadcast.push(subnet[i] | mask[i]);
        broadcast[i] = DtoB(broadcast[i]);
    }
    for (let i = 0; i <= 3; i++) {
        broadcast[i] = parseInt(broadcast[i], 2).toString(10);
    }
    return broadcast
}

function calculateRange (subnet, broadcast) {
    subnet[3] = Number(subnet[3]) + 1;
    broadcast[3] = broadcast[3] - 1;
    console.log('Range: ' + subnet.join('.') + ' - ' + broadcast.join('.'));
}