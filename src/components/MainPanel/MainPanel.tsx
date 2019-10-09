import React from 'react';
import './MainPanel.css';

import City from '../City/City';

const MainPanel: React.FC = () => {
	return (
		<main className="main-panel">
            <h1>Cities</h1>
            {/* HELP BUTTON */}
            <City cityName="New York"/>
            <City cityName="Moscow"/>
        </main>
	);
}

export default MainPanel;
