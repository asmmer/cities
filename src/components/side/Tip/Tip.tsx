import React from 'react';
import { Message, MessageType } from '../../../helpers/messages';

import './Tip.css';

interface ITip {
    message: Message;
}

const Tip: React.FC<ITip> = ({ message }) => {
    const { type, text } = message;
    const className = `tip-text ${(type === MessageType.ERROR && 'error-type')}`;

    return <h1 className={className}>
        {text}
    </h1>
}

export default Tip;
