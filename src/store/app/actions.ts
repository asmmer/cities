import { IAction } from "../../common/interfaces";

export enum CITY_ACTION {
    CITY_INPUT_TEXT_CHANGE = 'CITY_INPUT_TEXT_CHANGE',
    SET_CITIES = 'SET_CITIES',
    SET_OPENED_CITY = 'SET_OPENED_CITY',
    CLEAR_CITIES = 'CLEAR_CITIES',
    SET_TIP = 'SET_TIP'
}

export const cityInputTextChange = (text: string): IAction => ({
    type: CITY_ACTION.CITY_INPUT_TEXT_CHANGE,
    payload: text
});

export const setCities = (cities: string[] | undefined): IAction => ({
    type: CITY_ACTION.SET_CITIES,
    payload: cities
});

export const setOpenedCity = (key: null | number): IAction => ({
    type: CITY_ACTION.SET_OPENED_CITY,
    payload: key
});

export const clearCities = (): IAction => ({
    type: CITY_ACTION.CLEAR_CITIES
});

export const setTip = (message: string | object): IAction => ({
    type: CITY_ACTION.SET_TIP,
    payload: message
});