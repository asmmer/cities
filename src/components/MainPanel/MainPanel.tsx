import React from 'react';

import { useSelector } from 'react-redux';

import CitiesList from '../CitiesList/CitiesList';
import Tip from '../Tip/Tip';
import CityInput from '../CityInput/CityInput';

import './MainPanel.css';

const MainPanel: React.FC = () => {
    const { tipText } = useSelector((state: any) => state.app); 

    return <main className="main-panel">
        {/* HELP BUTTON */}
        <CitiesList />
        {
            tipText && <Tip tipText={tipText}/>
        }
        <CityInput />
    </main>;
}

export default MainPanel;
