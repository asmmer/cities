import { ICity, IFindCityResult, MessageType } from "./interfaces";
import { MESSAGES } from './constants';

export default class CitiesValidation {
    private static EXCEPTIONS: string[] = [
        'й', 'ь', 'ы', 'ъ'
    ]

    static findCity = (playerCity: string, cities: ICity[], resultCities: string[]): IFindCityResult => {
        const [searchResult]: ICity[] = cities.filter(({ city }: ICity ) => {
            return city.toLowerCase().trim() === playerCity.toLowerCase().trim();
        });

        if (!searchResult) {
            return {
                message: MESSAGES.CITY_ISNT_EXISTS
            };
        }

        const { city } = searchResult;

        if (resultCities.includes(city)) {
            return {
                message: MESSAGES.CITY_IS_IN_THE_LIST
            };
        }

        if (resultCities.length) {
            if (CitiesValidation.checkAnswer(city, resultCities) === false) {
                return {
                    message: MESSAGES.CITY_ISNT_VALID
                };
            }
        }

        const answer = CitiesValidation.getAnswer(city, cities, resultCities);

        const foundCities: IFindCityResult = {
            resultCities: [
                ...resultCities,
                city,
                answer
            ],
            message: {
                type: MessageType.Success,
                text: CitiesValidation.getTip(answer)
            }
        }

        return foundCities;
    }

    static checkAnswer = (city: string, resultCities: string[]): boolean => {
        const lastCity = `${resultCities.slice(-1)}`;

        const shift = (CitiesValidation.EXCEPTIONS.includes(`${lastCity.slice(-1)}`)) ? 2 : 1;

        const [firstLetter] = city.toLowerCase();
        const [lastLetter] = lastCity.slice(-shift).toLowerCase();

        return firstLetter === lastLetter;
    }

    static getAnswer = (city: string, cities: ICity[], resultCities: string[]) => {
        const shift = (CitiesValidation.EXCEPTIONS.includes(`${city.slice(-1)}`)) ? 2 : 1;
        const [lastLetter] = city.slice(-shift).toLowerCase();

        const citiesOptions: ICity[] = cities.filter(({ city }: ICity) => {
            const [firstLetter] = city.toLowerCase();
            
            return firstLetter === lastLetter;
        });

        while (true) {
            const { city }: ICity = citiesOptions[CitiesValidation.getRandomInt(0, citiesOptions.length)];
            if (!resultCities.includes(city)) {
                return city;
            }
        }
    }

    static getTip = (city: string): string => {
        const shift = (CitiesValidation.EXCEPTIONS.includes(`${city.slice(-1)}`)) ? 2 : 1;
        return city[city.length - shift].toUpperCase();
    }

    static getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}