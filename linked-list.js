class LinkedList {
    constructor(value = null){
        if (value === null) {
            this.head = null;
            return
        }
        this.head = new Node(value)
    }

    add (value) {
        let node = new Node(value);
        let currentNode = this.head;

        if(currentNode === null) {
            this.head = node;
            return node
        }

        while(currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = node;
    }

    delete (value) {
        // i want to look down the chain
        let currentNode = this.head;
        // i want the previous element stored
        let previous = currentNode;
        while(currentNode.value !== value && currentNode !== null) {
            previous = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === previous) {
            // rewrite
            this.head = currentNode.next;
        } else {
            previous.next = currentNode.next
        }
    }

}
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let linkedlist = new LinkedList(2);
linkedlist.add(2);
linkedlist.add(1);
linkedlist.add(3);
linkedlist.delete(2);
linkedlist.delete(1);
console.log(JSON.stringify(linkedlist, null, 4));