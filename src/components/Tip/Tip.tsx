import React from 'react';

import { useSelector } from 'react-redux';

import './Tip.css';

const Tip: React.FC = () => {
    const { tip } = useSelector((state: any) => state.app);

	return (<>
        {
            (tip !== '') && <h1 className="tip-text">{tip}</h1>
        }
	</>)
}

export default Tip;
