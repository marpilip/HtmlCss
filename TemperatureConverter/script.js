"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".convert_button");
    const celsiusField = document.getElementById("celsius_input");

    convertButton.addEventListener("click", function () {
        const celsiusTemperatureString = celsiusField.value;
        const celsiusTemperature = parseFloat(celsiusTemperatureString);

        if (!isNaN(celsiusTemperature) || celsiusTemperatureString === "") {
            const kelvin = celsiusTemperature + 273.15;
            const fahrenheit = (celsiusTemperature * 9 / 5) + 32;

            document.getElementById('kelvin_result').innerText = kelvin.toFixed(2);
            document.getElementById('fahrenheit_result').innerText = fahrenheit.toFixed(2);
        } else {
            alert('Пожалуйста, введите корректное числовое значение температуры в Цельсиях.');
        }
    })
});