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
let categories;

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
}

function createContent(obj) {
    let content = ``;
    for (let category of obj) {
        content +=  `<li>${category.name}</li>`;
    }
    return content;
}

function createContentList(e) {
    e.preventDefault();
    let clickedProduct = e.target.innerText;
    let categoryData = categories.find((category) => category.name === clickedProduct);
    let productData = Object.entries(categoryData);
    let productInfo= ``
    productData.forEach(([key, value]) => {
        productInfo += `<p>${value}</p>`;
    });
    product.innerHTML = productInfo ;
    product.append(createBtn());
}

function createBtn() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Купити';
    btn.addEventListener('click', clickBtn)
    return btn;
}

function clickBtn(e) {
    alert('Вітаю з вдалою покупкою');
    product.innerHTML = ''; 
    productList.innerHTML = '';
}
