function largestOfThreeNumbers(a: number, b: number, c: number): number {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
export { largestOfThreeNumbers };
