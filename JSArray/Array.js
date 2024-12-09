const AppNamespace = (function () {
    const createArray = length =>
        Array.from({length}, (_, i) => i + 1);

    const sortArrayDescending = array =>
        array.sort((a, b) => b - a);

    const getFirstNElementsSubarray = (array, elementsNumber) =>
        array.slice(0, elementsNumber);

    const getLastNElementsSubarray = (array, elementsNumber) =>
        array.slice(-elementsNumber);

    const getEvenNumbersSum = array =>
        array.filter(number => number % 2 === 0)
            .reduce((sum, evenNumber) =>
                sum + evenNumber, 0);

    const getEvenNumbersSquares = array =>
        array.filter(number => number % 2 === 0)
            .map(evenNumber =>
                evenNumber * evenNumber);

    const main = () => {
        const array = createArray(10);

        console.log("Исходный массив", createArray(10));
        console.log("Отсортированный массив в порядке убывания: ", sortArrayDescending(array));
        console.log("Первые 5 элементов массива: ", getFirstNElementsSubarray(array, 5));
        console.log("Последние 5 элементов массива: ", getLastNElementsSubarray(array), 5);
        console.log("Сумма чётных чисел массива", getEvenNumbersSum(array));
        console.log("Квадраты чётных чисел массива: ", getEvenNumbersSquares(createArray(100)));
    }

    return {
        main
    };
})();

AppNamespace.main();