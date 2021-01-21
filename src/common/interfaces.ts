import { CITY_ACTION } from "../store/app/actions";

export enum MessageType {
    Success,
    Error,
    Empty
};

export interface ICity {
    region: string;
    city: string;
}

export interface IMessage {
    type: MessageType;
    text: string;
};

export interface IAction {
    type: CITY_ACTION;
    payload?: any;
}

export interface IFindCityResult {
    resultCities?: string[];
    message: string | object;
} 