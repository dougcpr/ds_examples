class Queue {
    constructor() {
    this._que = []
    }
    enque (value) { this._que.push(value) }
    deque () { this._que.shift() }
}

let myQueue = new Queue();

myQueue.enque(1);
myQueue.enque(2);
myQueue.enque(3);
myQueue.deque();


