'use strict';
const _sha256 = require('crypto-js/sha256');

class Block {
    constructor(_index, _timestamp, _data, _previousHash = '') {
        this.index = _index;
        this.timestamp = _timestamp;
        this.data = _data;
        this.previousHash = _previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash () {
        return _sha256(this.index +this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock (difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Block Mined! : ', this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;
    }

    createGenesisBlock () {
        return new Block(0, '01/01/2018', 'Genesis Block', '0')
    }

    getLatestBlock () {
        return this.chain[this.chain.length - 1]
    }

    addBlock (newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid () {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }

        return true
    }
}

let vote = new Blockchain();
console.log('Mining Block 1!');
vote.addBlock(new Block(1, '01/02/2018', {candidate: 'Doug'}));

console.log('Mining Block 2!');
vote.addBlock(new Block(2, '01/03/2018', {candidate: 'Stormy'}));

console.log('Mining Block 3!');
vote.addBlock(new Block(3, '01/03/2018', {candidate: 'Doug'}));

console.log('Mining Block 4!');
vote.addBlock(new Block(4, '01/03/2018', {candidate: 'Doug'}));

console.log('Mining Block 5!');
vote.addBlock(new Block(4, '01/03/2018', {candidate: 'Stormy'}));
