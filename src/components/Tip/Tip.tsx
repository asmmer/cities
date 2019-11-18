import React from 'react';

import './Tip.css';

interface ITip {
    tipText: string;
}

const Tip: React.FC<ITip> = ({ tipText }) => <h1 className="tip-text">
    {tipText}
</h1>

export default Tip;
