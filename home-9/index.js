const userArr = prompt('Введіть значення масиву через пробіл');
const arr = userArr.split(' ');
const newArr = arr.filter(function(el) {
    return el !=''
});
if ( !isNaN(newArr[1])) {
    newArr.sort((a,b) => a-b);
    alert(newArr)
} else {
    newArr.sort();
    alert(newArr)
};
newArr.splice(1, 3)
alert(newArr)