/* example 1 */
function _example1 (finalValue) {
    let sum = 0;
    let product = 1;

    for(let i = 0; i <= finalValue; i++) {
        sum += i;
    }

    /* todo: why is still O(n) if it is using multiplication of 1*n, 2*n, ...., finalValue*n */
    /* the value which in multiplied isn't constant, or is it because there are N(constant) steps */
    for(let i = 1; i <= finalValue; i++) {
        product *= i;
    }

    /* two loops are added when then are not nested */
    /* this becomes n + n, because they have the same length */
    /* 2n drops to n, as a rule to drop constants */
    console.log('Example 1');
    console.log('--------------------');
    console.log('Sum: ' + sum);
    console.log('Product: ' + product);
    console.log('--------------------');
}

function _example2 (number) {
    console.log('Example 2');
    console.log('--------------------');
    for (let i = 0; i < number; i++) {
        /* todo: this inner loop - O(n) - is called (n) times */
        /* you multiply when nested loops are created */
        for (let j = 0; j < number; j++) {
            console.log('i: ' + i, 'j: ' + j);
        }
    }
    console.log('--------------------');
}

function _example3 (number) {
    console.log('Example 3');
    console.log('--------------------');
    /* todo: runs n + (n - 1) + (n - 2), ..., + 1) times => n(n + 1)/2 */
    /* drop constant 1/2 -> n^2 + n */
    /* drop constant n -> n^2 */
    for (let i = 0; i < number; i++) {
        for (let j = i + 1; j <= number; j++) {
            console.log('i: ' + i, 'j: ' + j);
        }
        console.log('-');
    }
    console.log('--------------------');
}

function _example4 (a, b) {
    /* todo: two independent inputs are multiplied together to give you O(a*b) */
    console.log('Example 4');
    console.log('--------------------');
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            console.log('i: ' + i, 'j: ' + j);
        }
    }
    console.log('--------------------');
}



_example1(5);
_example2(2);
_example3(4);
_example4(4, 2);