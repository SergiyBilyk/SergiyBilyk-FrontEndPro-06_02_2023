// const result = [];
// for (let i = 20; i <= 30; i += 0.5) {
//     result.push(i)
// }
// const userResult = result.join(' ')
// alert(`Числа від 20 до 30 = ${userResult}`);

// const userText = +prompt('Введіть число N');
// const result3 = []
// for (let i = 1; i <= 100; i++) {
//     if(Math.pow(i, 2) <= userText) {
//         result3.push(i)
//     }
// }
// alert(`Цілі числа, квадрат яких не перевищує числа N = ${result3}`);


// const userText1 = +prompt('Введіть число для перевірки на просте чи складене');
// const result4 = [];
// if (userText1 === 1 ) {
//     alert('Число повинно бути більшим 1');
// } else {
//     for (let i = 2; i < userText1; i++) {
//         if(userText1 % i == 0) {
//             result4.push(i);
//         }
//     }
//     if(result4.length > 0) {
//         alert('Складене число')
//     } else {
//         alert('Просте число')
//     }   
// }


// let userText2 = +prompt('Введіть число  для перевірки зведення');
// while (userText2 % 3 == 0) {
//     console.log(userText2)
//     userText2 /= 3;
// }
// if (userText2 == 1) {
//     alert('Це число можливо звести до числа 3')
// } else {
//     alert('Це число неможливо звести до числа 3')
// }


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
 ];

function add(data) {
    // let names =[];
    // let ages = [];
    return data.reduce((acc, {name, age}) => {
        acc.names.push(name)
        acc.ages.push(age)
        return acc
    },{names: [], ages: []})

    // for(let {name, age} of data){
    //     names.push(name)
    //     ages.push(age)
    //     console.log(names);
    //     console.log(ages);
    // }
}
// add(people)
let {names, ages} = add(people);
console.log(names)