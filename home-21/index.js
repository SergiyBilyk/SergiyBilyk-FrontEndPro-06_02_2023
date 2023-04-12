'use strict'

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }
    static SIZE_SMALL = {price: 50, callories: 20};
    static SIZE_BIG = {price: 100, callories: 40};
    static STUFFING_CHEESE = {price: 10, callories: 20};
    static STUFFING_SALAD = {price: 20, callories: 5};
    static STUFFING_POTATO = {price: 15, callories: 10};
    static TOPPING_MAYO = {price: 15, callories: 0};
    static TOPPING_SAUCE = {price: 20, callories: 5};

    addTopping(topping) {
        this.topping.push(topping);
    };

    calculateCallories() {
        const baseCallories = this.size.callories + this.stuffing.callories;
        const toppingCallories = this.topping.reduce((acc, item) => acc + item.callories, 0);
        let result = baseCallories + toppingCallories;
        return `Callories: ${result}`
    }

    calculatePrice() {
        const basePrice = this.size.price + this.stuffing.price;
        const toppingPrice = this.topping.reduce((acc, item) => acc + item.price, 0);
        let result = basePrice + toppingPrice;
        return `Price: ${result}`
    }
}



// // Перевірка
// var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// console.log(hamburger.calculateCallories());

// console.log(hamburger.calculatePrice());

// hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// console.log(hamburger.calculatePrice());