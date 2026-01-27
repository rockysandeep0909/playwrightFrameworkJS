"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.largestOfThreeNumbers = largestOfThreeNumbers;
function largestOfThreeNumbers(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= a && b >= c) {
        return b;
    }
    else {
        return c;
    }
}
