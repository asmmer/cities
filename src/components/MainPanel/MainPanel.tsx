import React from 'react';
import './MainPanel.css';

import CitiesList from '../CitiesList/CitiesList';
import CityInput from '../CityInput/CityInput';
import Tip from '../Tip/Tip';

const MainPanel: React.FC = () => {
    return <main className="main-panel">
        {/* HELP BUTTON */}
        <CitiesList />
        <Tip />
        <CityInput />
    </main>;
}

export default MainPanel;
