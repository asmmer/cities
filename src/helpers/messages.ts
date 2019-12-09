export enum MessageType {
    SUCCESS,
    ERROR,
    EMPTY
};

export interface Message {
    type: MessageType.SUCCESS | MessageType.ERROR | MessageType.EMPTY;
    text: string;
};
