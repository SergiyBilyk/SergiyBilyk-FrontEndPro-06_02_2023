'use strict'

let table = document.createElement('table');

document.body.prepend(table);
table.style.border = '1px solid grey';
table.style.width = '350px';
table.style.textAlign = 'center';

let count = 1;

for(let i = 0; i <= 9; i++) {
    let row = document.createElement('tr');
    table.append(row);
    for(let k = 1; k <= 10; k++) {
        let  cell = document.createElement('td');
        cell.textContent = count;
        count++;
        row.append(cell);
    }
}