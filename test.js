const smallestDivisor = num => {
    if (num === 1) {
        return 1;
    }
    const iter = (b, a) => {
        if (b % a === 0) {
            return a;
        }
        return iter (num, a + 1);
    }
    return iter(num, 2);
}
console.log(smallestDivisor(5));