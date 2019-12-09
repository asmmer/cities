import { Message, MessageType } from "./messages";

export interface foundCities {
    resultCities: Array<string>;
    message: Message;
}

interface invalidResult {
    message: Message;
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
                message: {
                    type: MessageType.ERROR,
                    text: "Такого города не было найдено!"
                }
            };
        }

        const { city }: any = searchResult;

        if (resultCities.includes(city)) {
            return {
                message: {
                    type: MessageType.ERROR,
                    text: "Такой город был уже угадан!"
                }
            };
        }

        if (resultCities.length) {
            if (!this.checkAnswer(city, resultCities)) {
                return {
                    message: {
                        type: MessageType.ERROR,
                        text: "Необходимо загадывать город начиная с указанной буквы!"
                    }
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