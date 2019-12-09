import IAction from "../interfaces";

import { 
    CITY_INPUT_TEXT_CHANGE,
    SET_CITIES, SET_TIP,
    CLEAR_CITIES,
    SET_OPENED_CITY
} from "./actions";
import { Message, MessageType } from "../../helpers/messages";

interface IInitialState {
    cities: Array<object>;
    resultCities: Array<string>;
    openedCity: null | number;
    tip: Message;
    cityInput: string;
}

const initialState: IInitialState = {
    cities: require(`../../cities/RU.json`),
    resultCities: [],
    openedCity: null,
    tip: {
        type: MessageType.EMPTY,
        text: ''
    },
    cityInput: ''
}

export const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CITY_INPUT_TEXT_CHANGE: {
            return {
                ...state,
                cityInput: action.payload
            }
        }
        case SET_CITIES: {
            return {
                ...state,
                resultCities: [...action.payload]
            }
        }
        case CLEAR_CITIES: {
            return {
                ...state,
                resultCities: [],
                openedCity: null
            }
        }
        case SET_OPENED_CITY: {
            return {
                ...state,
                openedCity: action.payload
            }
        }
        case SET_TIP: {
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