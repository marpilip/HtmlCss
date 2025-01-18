"use strict";

document.addEventListener("DOMContentLoaded", function () {
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.speak = function () {
        console.log(this.name + " издает звук");
    };

    function Dog(name) {
        Animal.call(this, name);
    }

    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    Dog.prototype.speak = function () {
        console.log(this.name + " лает");
    };

    function Cat(name) {
        Animal.call(this, name);
    }

    Cat.prototype = Object.create(Animal.prototype);
    Cat.prototype.constructor = Cat;

    Cat.prototype.speak = function () {
        console.log(this.name + " мяукает");
    };

    const dog = new Dog("Бобик");
    const cat = new Cat("Мурка");
    const animal = new Animal("Животное");

    document.getElementById("dog_button").addEventListener("click", function () {
        dog.speak();
    });

    document.getElementById("cat_button").addEventListener("click", function () {
        cat.speak();
    });

    document.getElementById("animal_button").addEventListener("click", function () {
        animal.speak();
    });
});