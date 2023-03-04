'use strict'

function createSum () {
    let summary = 0;
    return function sum(x = 0) {
        return summary += x;
    }
};
let result = createSum();
console.log(result(3));
console.log(result(5));
console.log(result(20));
