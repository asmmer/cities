import React from 'react';
import './MainPanel.css';

import CitiesList from '../CitiesList/CitiesList';
import CityInput from '../CityInput/CityInput';
import Tip from '../Tip/Tip';

const MainPanel: React.FC = () => {
    const cities = ['New York', 'Detroit', 'San-Francisco'];

	return (
		<main className="main-panel">
            <h1>Cities</h1>
            {/* HELP BUTTON */}
            <CitiesList cities={cities}/>
            <Tip/>
            <CityInput/>
        </main>
	);
}

export default MainPanel;
