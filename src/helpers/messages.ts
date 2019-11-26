export enum MessageType {
    INFO,
    ERROR
};

export interface Message {
    type: MessageType.INFO | MessageType.ERROR;
    text: string;
};
