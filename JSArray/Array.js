const appMameSpace = (() => {
    const createArray = (length) => Array.from({length}, (_, i) => i + 1);

    const sortArrayDescending = (array) => array.sort((a, b) => b - a);

    const getFirstFiveSubArray = (array) => array.slice(0, 5);

    const getLastFiveSubArray = (array) => array.slice(-5);

    const getSumEvenNumbers = (array) => array.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);

    const getSquaresOfEvenNumbers = (array) => array.filter(num => num % 2 === 0).map(num => num * num);

    const main = () => {
        const array_1 = createArray(10);
        console.log("Исходный массив", array_1);

        const sortedArray = sortArrayDescending(array_1);
        console.log("Отсортированный массив в порядке убывания: ", sortedArray);

        const firstFiveSubArray = getFirstFiveSubArray(array_1);
        console.log("Первые 5 элементов массива: ", firstFiveSubArray);

        const lastFiveSubArray = getLastFiveSubArray(array_1);
        console.log("Последние 5 элементов массива: ", lastFiveSubArray);

        const evenNumbersSum = getSumEvenNumbers(array_1);
        console.log("Сумма чётных чисел массива", evenNumbersSum);

        const array_2 = createArray(100);
        const squaresArray = getSquaresOfEvenNumbers(array_2);
        console.log("Квадраты чётных чисел массива: ", squaresArray)
    }

    return {
        main
    };
})();

appMameSpace.main();