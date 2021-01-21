import { MessageType } from "./interfaces";

export const MESSAGES = {
    CITY_ISNT_EXISTS: {
        type: MessageType.Error,
        text: "Такого города не было найдено!"
    },
    CITY_IS_IN_THE_LIST: {
        type: MessageType.Error,
        text: "Такой город был уже угадан!"
    },
    CITY_ISNT_VALID: {
        type: MessageType.Error,
        text: "Необходимо загадывать город начиная с указанной буквы!"
    }
}