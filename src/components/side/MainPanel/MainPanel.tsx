import React from 'react';

import { useSelector } from 'react-redux';

import CitiesList from '../CitiesList/CitiesList';
import Tip from '../Tip/Tip';
import CityInput from '../CityInput/CityInput';

import './MainPanel.scss';

const MainPanel: React.FC = () => {
    const { tip } = useSelector((state: any) => state.app); 

    return <main className="main-panel">
        {/* HELP BUTTON */}
        <CitiesList />
        {
            tip && <Tip message={tip}/>
        }
        <CityInput />
    </main>;
}

export default MainPanel;
