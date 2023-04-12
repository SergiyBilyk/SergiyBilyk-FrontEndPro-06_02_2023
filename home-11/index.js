const arr = [null, 2, 5, undefined, "ssf", 45, 5, -5, 10, 0, 25, undefined];
let average = 0;

function getAverage(arr) {
    let sum = 0;
    let count = 0;
    arr.forEach(function(element) {
        if (typeof element === "number") {
            sum += element;
            count++;
        }
        return;
    });
    return (sum / count).toFixed(2);
}

const result = getAverage(arr);
console.log('Cереднє арифметичне лише числових елементів даного масиву ' + result);





const x = +prompt("2) Введіть перше число");
const y = +prompt("Введіть друге число");
const znak = prompt("Введите знак бажаної операції(+, -, *, /, %, ^ )");

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x,y);
        default: 
            return  "Щось введено невірно";
    }
}
console.log(doMath(x, znak, y));



function getMax(arrNumbers) {
    let result3 = arrNumbers[0];
    arrNumbers.forEach((item) => {
        if (result3 < item) {
            result3 = item;
        }
    })
    return result3;
}
console.log(getMax([5, 6, 81, 33, 153, 12]));





function delSymbol(words, symboslArr) {
    let wordsArr = words.split("");
    for (let i = 0; i < wordsArr.length; i++) {
        for (let k of symboslArr) {
            if (wordsArr[i] === k) {
                wordsArr.splice(i, 1);
                    i--;
            }
        }
    }
    return wordsArr.join("");
}

const result4 = delSymbol(" hello world", ['l', 'd']);
console.log(result4);