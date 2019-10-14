import IAction from "../interfaces";

export const CITY_INPUT_TEXT_CHANGE = 'CITY_INPUT_TEXT_CHANGE';
export const SET_CITIES = 'SET_CITIES';

export const setCities = (cities: Array<string>): IAction => ({
    type: SET_CITIES,
    payload: cities
});

export const cityInputTextChange = (text: string): IAction => ({
    type: CITY_INPUT_TEXT_CHANGE,
    payload: text
});

