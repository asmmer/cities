export enum MessageType {
    SUCCESS,
    ERROR,
    EMPTY
};

export interface IMessage {
    type: MessageType.SUCCESS | MessageType.ERROR | MessageType.EMPTY;
    text: string;
};

export const MESSAGES = {
    CITY_ISNT_EXISTS: {
        type: MessageType.ERROR,
        text: "Такого города не было найдено!"
    },
    CITY_IS_IN_THE_LIST: {
        type: MessageType.ERROR,
        text: "Такой город был уже угадан!"
    },
    CITY_ISNT_VALID: {
        type: MessageType.ERROR,
        text: "Необходимо загадывать город начиная с указанной буквы!"
    }
}