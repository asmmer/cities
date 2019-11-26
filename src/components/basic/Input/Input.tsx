import React from 'react';

import './Input.css';

type InputProps = {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: any;
}

const Input: React.FC<InputProps> = ({ value, placeholder, disabled, onChange }) => <input
    className="simple-input"
    type="text"
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
/>

export default Input;
