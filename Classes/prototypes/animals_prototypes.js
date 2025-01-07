"use strict";

class Animal{
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " издает звук");
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + " лает");
    }
}

class Cat extends Animal {
    speak() {
        console.log(this.name + " мяукает");
    }
}

const dog = new Dog("Бобик");
const cat = new Cat("Мурка");

document.getElementById("dog_button").addEventListener("click", function() {
    dog.speak();
});

document.getElementById("cat_button").addEventListener("click", function() {
    cat.speak();
});