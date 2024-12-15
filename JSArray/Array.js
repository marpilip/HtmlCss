"use strict";

const App = (function () {
    const createArray = length => Array.from({length}, (_, i) => i + 1);

    const sortArrayDescending = array => array.sort((a, b) => b - a);

    const getFirstElementsSubarray = (array, elementsCount) => array.slice(0, elementsCount);

    const getLastElementsSubarray = (array, elementsCount) => array.slice(-elementsCount);

    const getEvenNumbersSum = array => array
            .filter(number => number % 2 === 0)
            .reduce((sum, evenNumber) => sum + evenNumber, 0);

    const getEvenNumbersSquares = array =>
        array
            .filter(number => number % 2 === 0)
            .map(evenNumber => evenNumber * evenNumber);

    const main = () => {
        console.log("Исходный массив", createArray(10));
        console.log("Отсортированный массив в порядке убывания: ", sortArrayDescending(createArray(10)));
        console.log("Первые 5 элементов массива: ", getFirstElementsSubarray(createArray(10), 5));
        console.log("Последние 5 элементов массива: ", getLastElementsSubarray(createArray(10),5));
        console.log("Сумма чётных чисел массива", getEvenNumbersSum(createArray(10)));
        console.log("Квадраты чётных чисел массива: ", getEvenNumbersSquares(createArray(100)));
    };

    return {
        main
    };
})();

App.main();