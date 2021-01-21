import React from 'react';
import CitiesList from '../CitiesList/CitiesList';
import Tip from '../Tip/Tip';
import CityInput from '../CityInput/CityInput';

import { useSelector } from 'react-redux';

import './MainPanel.scss';

const MainPanel: React.FC = () => {
    const { tip } = useSelector((state: any) => state.app); 

    return (
        <main className="main-panel">
            {/* TODO: Help button */}
            <CitiesList/>
            {
                tip && <Tip message={tip}/>
            }
            <CityInput/>
        </main>
    )
}

export default MainPanel;


