'use strict'

const shoppingCart = {
    items: [
        {
            name: 'Headphone',
            count: 1,
            price: 100
        }
    ],
    addItem(item) {
        let findItem = this.items.find(a => item.name === a.name);
        if(findItem) {
            findItem.count += 1;
        } else {
            this.items.push({ ...item, count: 1 });
        }
    },
    deleteItem(item) {
        let findItem = this.items.findIndex(a => item === a.name);
        if(findItem !== -1) {
            this.items.splice(findItem, 1);
        }
    },
    getTotalSum() {
        let sum = this.items.reduce(function(acuum, item) {
            return acuum += item.price * item.count;
        },0)
        return sum;
    }
};

shoppingCart.addItem({
    name: 'Keyboard',
    count: 1,
    price: 20
});

shoppingCart.addItem({
    name: 'Phone',
    count: 1,
    price: 100
})

shoppingCart.addItem({
    name: 'Phone',
    count: 1,
    price: 100
})

shoppingCart.deleteItem('Headphone');

console.log(shoppingCart.items);
console.log(shoppingCart.getTotalSum());