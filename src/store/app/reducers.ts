import IAction from "../interfaces";

import { ADD_CITY, CITY_INPUT_TEXT_CHANGE } from "./actions";
import { LOCATIONS, UI } from "../../constants";
import IReducer from "../interfaces";

const getDefaultLocation = () => LOCATIONS.RU;
let location = localStorage.getItem('location') || getDefaultLocation();

interface IInitialState {
    cities: Array<object>;
    resultCities: Array<string>;
    // UI: UI[location];
    tip: string;
    cityInput: string;
}

const initialState: IInitialState = {
    cities: require(`../../cities/${location}.json`),
    resultCities: [],
    // UI: UI[location],
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
        case ADD_CITY: {
            return {
                ...state,
                resultCities: [...state.resultCities, action.payload]
            }
        }
        default: {
            return state;
        }
    }

    return state;
}