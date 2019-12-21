import { IMessage, MessageType, MESSAGES } from "./messages";

export interface foundCities {
    resultCities: Array<string>;
    message: IMessage;
}

interface invalidResult {
    message: IMessage;
}

export default class CitiesValidation {
    EXCEPTIONS: Array<string> = [
        'й', 'ь', 'ы', 'ъ'
    ]

    findCity = (playerCity: string, cities: Array<object>, resultCities: Array<string>): foundCities | invalidResult => {
        const [searchResult] = cities.filter(({ city }: any) => {
            return city.toLowerCase().trim() === playerCity.toLowerCase().trim();
        });

        if (!searchResult) {
            return {
                message: MESSAGES.CITY_ISNT_EXISTS
            };
        }

        const { city }: any = searchResult;

        if (resultCities.includes(city)) {
            return {
                message: MESSAGES.CITY_IS_IN_THE_LIST
            };
        }

        if (resultCities.length) {
            if (!this.checkAnswer(city, resultCities)) {
                return {
                    message: MESSAGES.CITY_ISNT_VALID
                };
            }
        }

        const answer = this.getAnswer(city, cities, resultCities);

        const foundCities: foundCities = {
            resultCities: [
                ...resultCities,
                city,
                answer
            ],
            message: {
                type: MessageType.SUCCESS,
                text: this.getTip(answer)
            }
        }

        return foundCities;
    }

    checkAnswer = (city: string, resultCities: Array<string>): boolean => {
        const lastCity = `${resultCities.slice(-1)}`;

        const shift = (this.EXCEPTIONS.includes(`${lastCity.slice(-1)}`)) ? 2 : 1;

        const [firstLetter] = city.toLowerCase();
        const [lastLetter] = lastCity.slice(-shift).toLowerCase();

        return firstLetter === lastLetter;
    }

    getAnswer = (city: string, cities: Array<any>, resultCities: Array<string>) => {
        const shift = (this.EXCEPTIONS.includes(`${city.slice(-1)}`)) ? 2 : 1;
        const [lastLetter] = city.slice(-shift).toLowerCase();

        const citiesOptions: Array<object> = cities.filter(({ city }: any) => {
            const [firstLetter] = city.toLowerCase();
            
            return firstLetter === lastLetter;
        });

        while (true) {
            const answer: any = citiesOptions[this.getRandomInt(0, citiesOptions.length)];
            if (!resultCities.includes(answer)) {
                return answer.city;
            }
        }
    }

    getTip = (city: string) => {
        const shift = (this.EXCEPTIONS.includes(`${city.slice(-1)}`)) ? 2 : 1;
        return city[city.length - shift].toUpperCase();
    }

    getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}