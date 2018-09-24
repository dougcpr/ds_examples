class Stack {
    constructor(value = null) {
        // error handling
        if (value === null) {
            this._stack = [];
        } else {
            this._stack = [value];
        }
    }
    // adds value to beginning of stack
    push (value) {
        this._stack.unshift(value)
    }
    // checks if stack is empty and returns first element on top
    pop () {
        if (!this.emptyStackCheck()) {
            return this._stack.shift()
        }
    }
    // repeats over stack element's and prints from top to bottom
    print () {
        if (!this.emptyStackCheck()) {
            console.log('---Top Of Stack---');
            this._stack.map(element => {
                console.log(element)
            });
            console.log('---Bottom Of Stack---')
        }
    }

    emptyStackCheck () {
        if (this._stack.length === 0) {
            console.log('The Stack Is Empty');
            return true
        } else {
            return false
        }
    }

};

let myStack = new Stack(4);

myStack.push(1); // Stack: [1, 4]
myStack.push(2); // Stack: [2, 1, 4]

myStack.print();
myStack.pop();
myStack.print();