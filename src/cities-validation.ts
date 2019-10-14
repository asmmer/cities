export default class CitiesValidation  {
    EXCEPTIONS: Array<string> = [
        'ь', 'ы', 'ъ'
    ]

    findCity = (playerCity: string, cities: Array<object>, resultCities: Array<string>) => {
        const searchResult = cities.filter(({ city }: any) => city.toLowerCase().trim() === playerCity.toLowerCase().trim());

        if (searchResult.length === 0) {
            // return alert(`${UI.errors.cityIsNotFound}`);
            return;
        }

        const { city }: any = searchResult[0];

        if (resultCities.includes(city)) {
            // return alert(`${this.UI.errors.cityInList}`);
            return;
        }

        if (resultCities.length > 0) {
            if (!this.checkAnswer(city, resultCities)) {
                // return alert(`${this.UI.errors.answerIsInvalid}`);
                return;
            }
        }

        const answer = this.getAnswer(city, cities, resultCities);

        return {
            resultCities: [
                ...resultCities,
                city,
                answer
            ],
            tip: this.getTip(answer)
        }
    }


    checkAnswer = (city: string, resultCities: Array<string>) => {
        const lastCity = resultCities[resultCities.length - 1];
        const shift = (this.EXCEPTIONS.includes(lastCity[lastCity.length - 1])) ? 2 : 1;

        return city.toLowerCase()[0] === lastCity.toLowerCase()[lastCity.length - shift];
    }

    getAnswer = (city: string, cities: Array<any>, resultCities: Array<string>) => {
        const shift = (this.EXCEPTIONS.includes(city[city.length - 1])) ? 2 : 1;
        const lastLetter = city[city.length - shift];

        const citiesOptions: Array<object> = cities.filter(({ city }: any) => city[0].toLowerCase() === lastLetter);

        while (true) {
            const answer: any = citiesOptions[this.getRandomInt(0, citiesOptions.length)];
            if (!resultCities.includes(answer)) {
                return answer.city;
            }
        }
    }
 
    getTip = (city: string) => {
        const shift = (this.EXCEPTIONS.includes(city[city.length - 1])) ? 2 : 1;
        return city[city.length - shift].toUpperCase();
    }

    getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}