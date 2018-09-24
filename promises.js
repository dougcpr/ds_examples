class foo {
    constructor (value) {
        this.value = value
    }
    async compare (num) {
        try {
            let qoo = await compareTwoNumbers(num, this.value)
            return qoo
        } catch (err) {
            console.log(err)
        }
    }
}

function compareTwoNumbers(num, value) {
    return value>num ? `${value} > ${num}` : `${value} < ${num}`
}

let f = new foo(20)
f.compare(40)
    .then(res => console.log(res))
    .catch(err => console.log(err))
