import IAction from "../interfaces";
import { Message } from "../../helpers/messages";

export const CITY_INPUT_TEXT_CHANGE = 'CITY_INPUT_TEXT_CHANGE';
export const SET_CITIES = 'SET_CITIES';
export const SET_OPENED_CITY = 'SET_OPENED_CITY';
export const CLEAR_CITIES = 'CLEAR_CITIES';
export const SET_TIP = 'SET_TIP';

export const cityInputTextChange = (text: string): IAction => ({
    type: CITY_INPUT_TEXT_CHANGE,
    payload: text
});

export const setCities = (cities: Array<string>): IAction => ({
    type: SET_CITIES,
    payload: cities
});

export const setOpenedCity = (key: null | number): IAction => ({
    type: SET_OPENED_CITY,
    payload: key
});

export const clearCities = (): IAction => ({
    type: CLEAR_CITIES
});

export const setTip = (message: Message): IAction => ({
    type: SET_TIP,
    payload: message
});