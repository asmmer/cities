import React from 'react';
import { IMessage, MessageType } from '../../../common/interfaces';

import './Tip.scss';

interface ITip {
    message: IMessage;
}

const Tip: React.FC<ITip> = ({ message }) => {
    const { type, text } = message;
    const computedClass = `tip-text ${(type === MessageType.Error && 'error-type')}`;

    return (
        <h1 className={computedClass}>
            {text}
        </h1>
    )
}

export default React.memo(Tip);