import { IAction, ICity, IMessage, MessageType } from "../../common/interfaces";
import { CITY_ACTION } from "./actions";

interface IInitialState {
    cities: ICity[];
    resultCities: string[];
    cityInput: string;
    tip: IMessage;
    openedCity?: number
}

const initialState: IInitialState = {
    cities: require('../../data/RU.json'),
    resultCities: [],
    tip: {
        type: MessageType.Empty,
        text: ''
    },
    cityInput: ''
}

export const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CITY_ACTION.CITY_INPUT_TEXT_CHANGE: {
            return {
                ...state,
                cityInput: action.payload
            }
        }
        case CITY_ACTION.SET_CITIES: {
            return {
                ...state,
                resultCities: [...action.payload]
            }
        }
        case CITY_ACTION.CLEAR_CITIES: {
            return {
                ...state,
                resultCities: [],
                openedCity: null
            }
        }
        case CITY_ACTION.SET_OPENED_CITY: {
            return {
                ...state,
                openedCity: action.payload
            }
        }
        case CITY_ACTION.SET_TIP: {
            return {
                ...state,
                tip: action.payload
            }
        }
        default: {
            return state;
        }
    }
}