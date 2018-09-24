let getSum = function(a, b) {
    if (b === 0) {
        return a;
    } else {
        // xor will take the bits where either = 1 but not both
        // & 1's where they are both 1 and shifts one 0 from the right
        return getSum(a ^ b, (a & b) << 1)
    }
};

function subtract(x, y)
{
    // Iterate till there is no carry
    while (y != 0)
    {
        // borrow contains common set bits of y and unset
        // bits of x
        let borrow = (~x) & y;

        // Subtraction of bits of x and y where at least
        // one of the bits is not set
        x = x ^ y;

        // Borrow is shifted by one so that subtracting it from
        // x gives the required sum
        y = borrow << 1;
    }
    return x;
}


console.log(getSum(2, 2));
console.log(subtract(1, 5));