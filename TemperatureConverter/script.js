"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".convert_button");
    const celsiusField = document.getElementById("celsius_input");

    const kelvinResultElement = document.getElementById("kelvin_result");
    const fahrenheitResultElement = document.getElementById("fahrenheit_result");

    function convertTemperature() {
        const celsiusTemperatureString = celsiusField.value;
        const celsiusTemperature = parseFloat(celsiusTemperatureString);

        if (celsiusTemperatureString === "" || isNaN(celsiusTemperature)) {
            alert("Пожалуйста, введите корректное числовое значение температуры в Цельсиях.");
        } else {
            const kelvin = celsiusTemperature + 273.15;
            const fahrenheit = (celsiusTemperature * 9 / 5) + 32;

            kelvinResultElement.innerText = kelvin.toFixed(2);
            fahrenheitResultElement.innerText = fahrenheit.toFixed(2);
        }
    }

    convertButton.addEventListener("click", convertTemperature);

    celsiusField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            convertTemperature();
        }
    });
});