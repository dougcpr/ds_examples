'use strict';
let msg = 'the quick brown fox jumps over the lazy dog';
msg = msg.split('');

function swapLetters(a, b) {
    let temp = '';
    temp = msg[b];
    msg[b] = msg[a];
    msg[a] = temp;
}

function reverseString() {
    for (let i = 0; i < Math.floor((msg.length - 1)/2); i++) {
        swapLetters(i, msg.length - (1 + i))
    }
    msg = msg.join('');
    return 'Reversed Message: ' + msg
}

console.log(reverseString(msg));

let msg_2 = 'aaabbbccddddd';
msg_2 = msg_2.split('');
let count = {};

msg_2.map((element) => {
    if(count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
});

console.log(count);

let msg_3 = 'hello to the world';
msg_3 = msg_3.split(' ');

function swap (msg) {
    for (let i = 0; i < 4; i++) {
        msg[i] = msg[i].split('').reverse().join('');
    }
    return msg.join('');
}

console.log(swap(msg_3));
