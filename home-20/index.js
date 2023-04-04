'use strict'

function Person(name, male) {
    this.name = name;
    this.male = male;
    this.getPersonInfo = function() {
        console.log(`Ім'я: ${this.name}, стать: ${this.male}`);
    }
}

function Apartment() {
    this.inhabitantApartment = [];
    this.addPerson = function(person) {
        this.inhabitantApartment.push(person);
    }
}
function House(maxApartment) {
    this.apartments = [];
    this.maxApartment = maxApartment;
    this.addApartment = function(apartment) {
        if(this.apartments.length < this.maxApartment){
            this.apartments.push(apartment);
        } else{
            console.log('Кількість квартир в будинку досягла максимуму');
        }
    }
}

const joe = new Person("Joe", "male");
const jina = new Person("Jina", "female");
// const jorj = new Person("Jorj", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
// const apartment3 = new Apartment();

apartment1.addPerson(joe);
apartment2.addPerson(jina);
// apartment3.addPerson(jorj);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
// house.addApartment(apartment3);