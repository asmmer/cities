import React from 'react';

import './Button.css';

type ButtonProps = {
    children?: any;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    onClick?:  any;
}
  
const Button: React.FC<ButtonProps> = ({children, type, disabled, onClick}) => <button
    className="simple-button"
    type={type}
    disabled={disabled}
    onClick={onClick}
>{children}</button>

export default Button;
