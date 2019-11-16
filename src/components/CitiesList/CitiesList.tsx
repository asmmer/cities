import React, { useEffect } from 'react';
import City from '../City/City';

import { useSelector } from 'react-redux';

import './CitiesList.css';

const CitiesList: React.FC = () => {
	const resultCities: Array<string> = useSelector((state: any) => state.app.resultCities);

	useEffect(() => {
		window.scrollTo(0,document.body.scrollHeight);
	}, [resultCities]); 

	return <ul className="cities-list">
		{
			resultCities.map((city, index) => <City
				key={index}
				cityNumber={index + 1}
				cityName={city}
			/>)
		}
    </ul>;
}

export default CitiesList;
