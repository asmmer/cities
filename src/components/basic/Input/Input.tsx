import React from 'react';

import './Input.scss';

interface IInput {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: any;
}

const Input: React.FC<IInput> = ({ value, placeholder, disabled, onChange }) => <input
    className="simple-input"
    type="text"
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
/>

export default Input;
