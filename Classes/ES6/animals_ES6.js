"use strict";

document.addEventListener("DOMContentLoaded", function () {
    class Animal {
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