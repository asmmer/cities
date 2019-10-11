import IAction from "../interfaces";

export const CITY_INPUT_TEXT_CHANGE = 'CITY_INPUT_TEXT_CHANGE';
export const ADD_CITY = 'ADD_CITY';

export const addCity = (city: string): IAction => ({
    type: ADD_CITY,
    payload: city
});

export const cityInputTextChange = (text: string): IAction => ({
    type: CITY_INPUT_TEXT_CHANGE,
    payload: text
});

