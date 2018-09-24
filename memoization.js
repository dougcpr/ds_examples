var memoFibonacci = (function() {
    var memo = {};

    function f(n) {
        var value;

        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(n - 1) + f(n - 2);

            memo[n] = value;
        }
        return value;
    }
    // Returning f, updates the memo obj
    return f;
})();

function fibonacci(n) {
    if (n === 0 || n === 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Memo Result: ' + memoFibonacci(25));
console.log('Normal Result: ' + fibonacci(25));
