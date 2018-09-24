function _problem1 (a, b) {
    console.log('--------------------');
    console.log('Problem 1');
    let sum = 0;
    /* todo: 1 iteration, no nesting or other independent variables. O(n) */
    for (let i = 0; i < b; i++) {
        sum += a;
    }
    return 'Sum: ' + sum
}
console.log(_problem1(2, 2));

function _problem2 (a, b) {
    /* todo: running method b times, gives you a runtime of O(b)*/
    console.log('--------------------');
    console.log('Problem 2');
    if (b < 0) {
        // error
        return 0
    } else if (b === 0) {
        return 1
    } else {
        return 'Product: ' + a * Math.pow(a, b-1)
    }
}

console.log(_problem2(3, 2));

function _problem3 (a, b) {
    /* todo: completing same operation till integer (a) isn't divisible by (b) without creating a long variable: runtime = O(n) */
    console.log('--------------------');
    console.log('Problem 3');
    if (b <= 0) {
        // error
        return -1
    }
    if (b <= a) {
        return 'Remainder: ' + a%b;
    } else {
        return 'Remainder: Fraction';
    }
}

console.log(_problem3(15, 4));

function _problem4 (a, b) {
    /* todo: O(a/b) */
    console.log('--------------------');
    console.log('Problem 4');
    if (a > 0 && b > 0) {
        let count = 0;
        let sum = b;
        while (sum <= a) {
            sum += b;
            count++;
        }
        return 'Count: ' + count
    } else {
        return 'Positive Inputs Only.'
    }
}

console.log(_problem4(40, 4));

function _problem5a (n) {
    console.log(_problem5b(n, 1, n))
}

function _problem5b (n, min, max) {
    if (max < min) {
        return 'perfect_sqrt(' + n + '): Does not exist.'
    }
    /* involves recursion, so you are calling the function with new inputs */
    /* todo: when the problem space gets halved iteratively, runtime = O(log(n)) */
    let guess = Math.floor((min + max)/2);
    if ((guess * guess) === n) {
        // found it!
        return 'perfect_sqrt(' + n + '): ' + guess
    } else if ((guess * guess) < n) {
        // too low
        return _problem5b(n, guess + 1, max)
    } else {
        // too high
        return _problem5b(n, min, guess - 1)
    }
}

console.log('--------------------');
console.log('Problem 5');
_problem5a(64);

function _problem6 (num) {
    /* todo: Runtime is Big O(sqrt(n)) */
    console.log('--------------------');
    console.log('Problem 6');
    console.log('Input: ' + num);
    let count = 1;
    for (let i = 1; (i * i) <= num; i++) {
        count = i;
        if ((i * i) === num) {
            console.log('Perfect Root Found! It is ' + i +'.');
            return count +  ' iteration(s) run.'
        }
    }
    console.log('No Perfect Root.');
    return count + ' iteration(s) run.'
}
console.log(_problem6(16));