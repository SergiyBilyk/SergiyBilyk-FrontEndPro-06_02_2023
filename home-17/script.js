'use strict'

const data = {
    noteboks: [
        {name: 'Acer Aspire 7 A715-42G-R3EZ' ,
        description: 'AMD Ryzen 5 5500U / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
        price: '30 249₴'},
        {name: 'Lenovo IdeaPad Gaming 3 15IHU6' ,
        description: 'Core i5-11320H / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce GTX 1650',
        price: '29 999₴'},
        {name: 'ASUS Laptop X515EA-BQ3230' ,
        description: 'Intel Core i3-1115G4 / RAM 12 ГБ / SSD 512 ГБ',
        price: '20 999₴'}
    ],
    computers: [
        {name: 'Acer Aspire C24-420' ,
        description: 'AMD Ryzen 3 3250U (2.6 - 3.5 ГГц) / RAM 8 ГБ / SSD 256 ГБ / AMD Radeon Graphics',
        price: '20 999₴'},
        {name: 'Artline Gaming (X43v31)' ,
        description: 'AMD Ryzen 5 3600 / Gigabyte B450M S2H / 16ГБ DDR4 / MSI GeForce RTX 3050 AERO 8G OC / SSD 480ГБ',
        price: '27 499₴'},
        {name: 'QUBE i5 10400F' ,
        description: 'Intel Core i5-10400F / RAM 16 ГБ / HDD 1 ТБ + SSD 240 ГБ / nVidia GeForce GTX 1660, 6 ГБ',
        price: '26 999₴'}
    ],
    tablets: [
        {name: 'Lenovo Tab M10 Plus FHD' ,
        description: 'Экран 10.3" IPS (1920x1200) MultiTouch / MediaTek Helio P22T (2.3 ГГц) / RAM 4 ГБ / 64 ГБ + microSD',
        price: '6 999₴'},
        {name: 'Apple iPad 10.2" 2021' ,
        description: 'Экран 10.2" IPS (2160x1620) MultiTouch / Apple A13 Bionic (2.65 ГГц) / 64 ГБ встроенной памяти / основная камера 8 Мп, фронтальная - 12 Мп',
        price: '16 999₴'},
        {name: 'Samsung Galaxy Tab A7 Lite LT' ,
        description: 'Экран 8.7" (1340x800) MultiTouch / MediaTek Helio P22T (2.3 ГГц) / RAM 4 ГБ / 64 ГБ + microSD / 3G / 4G / Wi-Fi / основная камера 8 Мп, фронтальная - 2 Мп / ',
        price: '7 099₴'}
    ]
}

let productList = document.querySelector('.product-list');
let product = document.querySelector('.product');
let ul = document.querySelector('ul');
let body = document.querySelector('body');
let categories;
let wrapper = document.querySelector('.wrapper');
let form = document.querySelector('form');
form.noValidate='true';
let city = ['Київ', 'Дніпро', 'Львів'];
let cityEng = ['Kyiv', 'Dnipro', 'Lviv'];
let selectedItem;
let dataForms;
let div = document.createElement('div');
div.classList.add('orderList')

ul.addEventListener('click', getCaregory);
productList.addEventListener('click', createContentList);

function getCaregory(e) {
    e.preventDefault();
    if (e.target != ul) {
        let selectCategory = e.target.dataset.category;
        let selectData = data[selectCategory];
        categories = selectData;
        productList.innerHTML = createContent(selectData);
    }
    div.remove()
    form.innerHTML = '';
}

function createContent(mas) {
    return mas.reduce((acc, item) => (acc += `<li>${item.name}</li>`), '');
}

function createContentList(e) {
    e.preventDefault();
    let clickedProduct = e.target.innerText;
    let categoryData = categories.find((category) => category.name === clickedProduct);
    let productData = Object.values(categoryData);
    let productInfo = productData.reduce((acc, item) => (acc += `<p>${item}</p>`), '');
    product.innerHTML = productInfo ;
    selectedItem = clickedProduct;
    product.append(createBtn());
}

function createBtn() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Купити';
    btn.addEventListener('click', clickBtn);
    return btn;
}

function clickBtn(e) {
    product.innerHTML = ''; 
    productList.innerHTML = '';
    createForm();
}

function createForm() {
    form.innerHTML = '';
    createName();
    createCity();
    createPost();
    createRadioButton("payment", "payment", "  Післяплата");
    createRadioButton("payment", "card", "  Банківська картка");
    createAmount();
    createComments();
    createSubmit();
}

function createName() {
    let label = document.createElement("label");
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    input.placeholder = 'ПІБ покупця';
    input.required = 'true';
    form.append(label);
    label.append(input);
}

function createCity() {
    let select = document.createElement('select');
    select.name = 'city';
    for(let i = 0; i < city.length; i++) {
        let option = document.createElement('option');
        option.value = cityEng[i];
        option.text = city[i];
        select.add(option);
    }
    form.append(select);
}

function createPost() {
    let label = document.createElement("label");
    let input = document.createElement('input');
    input.type = 'number';
    input.name = 'postNumber';
    input.placeholder = 'Склад Нової пошти';
    input.required = 'true';
    form.append(label);
    label.append(input);

}

function createRadioButton(name, value, text) {
    let radioButton = document.createElement("input");
    let label = document.createElement("label");
    radioButton.type = "radio";
    radioButton.name = name;
    radioButton.value = value;
    label.innerHTML = text;
    if(value === 'card') {
        radioButton.checked = 'true';
    }
    form.append(label);
    label.prepend(radioButton);
}

function createAmount() {
    let input = document.createElement('input');
    let label = document.createElement("label");
    input.type = 'number';
    input.name = 'amount';
    input.value = '1';
    label.innerHTML = 'Кількість продукції ';
    form.append(label);
    label.append(input);
}

function createComments() {
    let textarea = document.createElement('textarea');
    textarea.rows = '8';
    textarea.name = 'comment';
    textarea.placeholder = 'Коментарій до замовлення';
    form.append(textarea);
}

function createSubmit() {
    let input = document.createElement('input');
    input.type = 'submit';
    input.value = 'Замовити'
    form.append(input);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    dataForms = {
        name: form.name.value,
        city: city[form.city.selectedIndex],
        postNumber: form.postNumber.value,
        payment: form.payment.value,
        amount: form.amount.value,
        comment: form.comment.value,
    }

    if(validation(this) == true) {
        createOrder(dataForms);
    } 

})


function createOrder(obj) {
    div.insertAdjacentHTML('beforeEnd', `<p>${obj.name} дякумо за замовлення</p>
                            <p>Ви замовили ${selectedItem} в кількості ${obj.amount} шт.</p>
                            <p>Замовлення буде доставлено в місто ${obj.city} на склад Нової пошти №${obj.postNumber}</p>`);
    form.innerHTML='';
    body.append(div);
}

function validation(form) {

    function createError(input, text) {
        const parent = input.parentNode;
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        errorSpan.textContent = text;
        parent.appendChild(errorSpan);
    }

    let result = true;
    form.querySelectorAll('input').forEach(input => {
        if ( input.required = 'true' && input.value === '') {
            createError(input, 'Заповніть поле');
            result = false;
        }
    })
    return result
}