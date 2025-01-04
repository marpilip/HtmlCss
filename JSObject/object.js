"use strict";

const Country = function () {
    const countries = [
        {
            name: 'USA',
            cities: [
                {name: 'New York', population: 8550405},
                {name: 'Los Angeles', population: 3990456},
                {name: 'Chicago', population: 2746388},
                {name: 'Philadelphia', population: 1608161}
            ]
        },
        {
            name: 'Canada',
            cities: [
                {name: 'Toronto', population: 2801945},
                {name: 'Montreal', population: 1769996},
                {name: 'Vancouver', population: 675218},
                {name: 'Calgary', population: 1392609},
                {name: 'Edmonton', population: 1016193}
            ]
        },
        {
            name: 'Mexico',
            cities: [
                {name: 'Mexico City', population: 9209944},
                {name: 'Guadalajara', population: 5002466},
                {name: 'Monterrey', population: 5159506},
                {name: 'Puebla', population: 3213283}
            ]
        },
        {
            name: 'Russia',
            cities: [
                {name: 'Moscow', population: 12500000},
                {name: 'Saint-Petersburg', population: 5000000}
            ]
        }
    ];

    function getCountriesWithMaxCitiesCount(countries) {
        const maxCitiesCount = countries.reduce((max, country) => Math.max(max, country.cities.length), 0);

        return countries.filter(country => country.cities.length === maxCitiesCount);
    }

    function getPopulationsByCountries(countries) {
        const populationsByCountries = {};

        countries.forEach(country => {
            populationsByCountries[country.name] =
                country.cities.reduce((totalPopulation, city) => totalPopulation + city.population, 0);
        });

        return populationsByCountries;
    }

    function main() {
        console.log('Страны с максимальным количеством городов:', getCountriesWithMaxCitiesCount(countries));
        console.log('Суммарная численность населения по странам:', getPopulationsByCountries(countries));
    }

    return {
        main
    };
}();

Country.main();