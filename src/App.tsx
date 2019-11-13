import React from 'react';

import MainPanel from './components/MainPanel/MainPanel';
import TopPanel from './components/TopPanel/TopPanel';

import './App.css'

const App: React.FC = () => {
	return (<>
		<TopPanel/>
		<MainPanel/>
	</>);
}

export default App;
