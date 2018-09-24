class BinarySearchTree {
    constructor () {
        this.root = null;
    }
    insert (value) {
        let node = new Node(value);
        let currentNode = this.root;

        if (this.root === null) {
            this.root = node;
        }
        while(currentNode) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = node;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = node;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let bst = new BinarySearchTree();
bst.insert(2);
console.log('---');
bst.insert(1);
console.log('---');
bst.insert(5);
console.log('---');
bst.insert(6);
console.log('---');
bst.insert(4);
console.log(JSON.stringify(bst, null, 4));