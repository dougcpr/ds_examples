let msg = "abc abc c";
msg = msg.split("");
let hashMap = {};
// element = msg[char]
// map on array
msg.map((element) => {
    if (hashMap[element]) {
        hashMap[element] += 1;
    } else {
        hashMap[element] = 1;
    }
});


console.log(hashMap);
for (let i = 0; i !== Math.floor((msg.length-1)/2); i++) {
    let temp =  msg[i];
    msg[i] = msg[((msg.length-1) - i)];
    msg[((msg.length-1) - i)] = temp;
}
msg = msg.join("");
console.log(msg);
