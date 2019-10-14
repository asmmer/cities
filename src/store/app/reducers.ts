import IAction from "../interfaces";

import { CITY_INPUT_TEXT_CHANGE, SET_CITIES } from "./actions";
import { LOCATIONS, UI } from "../../constants";

const getDefaultLocation = () => LOCATIONS.RU;
let location = localStorage.getItem('location') || getDefaultLocation();

interface IInitialState {
    cities: Array<object>;
    resultCities: Array<string>;
    UIDictionary: any;
    tip: string;
    cityInput: string;
}

const initialState: IInitialState = {
    cities: require(`../../cities/${location}.json`),
    resultCities: [],
    UIDictionary: (location === LOCATIONS.RU) ? UI.RU : UI.US,
    tip: '',
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
        default: {
            return state;
        }
    }
}