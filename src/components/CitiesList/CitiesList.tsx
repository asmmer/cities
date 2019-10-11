import React from 'react';
import City from '../City/City';

import { useSelector } from 'react-redux';

import './CitiesList.css';

interface ICitiesList {
	cities: Array<string>;
}

const CitiesList: React.FC<ICitiesList> = () => {
	const resultCities: Array<string> = useSelector((state: any) => state.app.resultCities);

	return (
		<ul className="cities-list">
			{
				resultCities.map((city, index) => <City key={index} cityName={city}/>)
			}
        </ul>
	);
}

export default CitiesList;
