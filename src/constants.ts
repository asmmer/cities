export interface ILocations {
    US: string;
    RU: string;
}

export const LOCATIONS: ILocations = {
    US: 'US',
    RU: 'RU'
}

export const UI = {
    RU: {
        citiesList: 'Список городов',
        tipText: 'Следующий город на букву',
        inputCity: {
            inputCityHere: 'Введите город здесь...',
            enterCity: 'Принять',
            errors: {
                cityIsNotFound: 'Такого города нет!',
                cityInList: 'Такой город уже есть в списке!',
                answerIsInvalid: 'Ваш ответ не соответствует требованиям!'
            }
        },
        restart: 'Начать заново',
        toggleLocation: 'К США',
    },
    US: {
        citiesList: 'Cities list',
        inputCity: {
            inputCityHere: 'Enter the city here...',
            enterCity: 'Enter',
            errors: {
                cityIsNotFound: `There's no city like this!`,
                cityInList: `This city is already in list!`,
                answerIsInvalid: `Your answer does not meet the requirements!`
            }
        },
        restart: 'Restart',
        toggleLocation: 'To RU'
    }
}