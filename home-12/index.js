'use strict';

function getPow(num, degree) {
    if(degree === 1) {
        return num;
    } else {
        return num * getPow(num, degree - 1);
    }
};
const result = getPow(3, 2);
console.log(result);