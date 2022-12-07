module.exports.test = (func, input, expected) => {
    const actual = func(input);
    if (expected !== actual) {
        console.log(`FAIL: Got ${actual}, expected ${expected}`);
    } else {
        console.log(`PASS: ${actual} === ${expected}`);
    }
}