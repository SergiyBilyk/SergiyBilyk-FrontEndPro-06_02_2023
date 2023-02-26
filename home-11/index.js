const arr = [null, 2, 5, undefined, "ssf", 45, 5, -5, 10, 0, 25, undefined]
let average = 0;

function getAverage (arr) {
    let sum = 0;
    let count = 0;
    arr.filter(function(element) {
        if (typeof element === "number") {
            sum += element 
            count++
        }
        return
    });
    return average = (sum / count).toFixed(2)
}

const result = getAverage (arr)
console.log('Cереднє арифметичне лише числових елементів даного масиву ' + result)





const x = +prompt("2) Введіть перше число");
const y = +prompt("Введіть друге число");
const znak = prompt("Введите знак бажаної операції(+, -, *, /, %, ^ )");
let result2 = 0;

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return result2 = x + y;
        case '-':
            return result2 = x - y;
        case '*':
            return result2 = x * y;
        case '/':
            return result2 = x / y;
        case '%':
            return result2 = x % y;
        case '^':
            return result2 = Math.pow(x,y);
        default: 
            result2 ="Щось введено невірно"
    }
    return result2
}
console.log(doMath(x, znak, y));







function getMax() {
    const arrNumbers = prompt('3) Введіть массив чисел через пробіл').split(' ');
    result3 = +arrNumbers[0]
    arrNumbers.forEach((item) => {
        if(result3 < +item)
        {
            result3 = item
        }
    })
    return result3
}
console.log(getMax())




function delSymbol() {
    let words = prompt('Введіть фразу');
    let symbols = prompt('Введіть символи без пробілу');
    let wordsArr = words.split("");
    let symboslArr = symbols.split("");

    for(let i = 0; i < wordsArr.length; i++) {
        for(let k of symboslArr) {
            if (wordsArr[i] === k) {
                wordsArr.splice(i, 1);
                console.log(i--);
            }
        }
    }
    return wordsArr.join("");
}

const result4 = delSymbol();
console.log(result4);