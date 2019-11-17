import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import City from '../City/City';
import CitiesListPlaceholder from '../СitiesListPlaceholder/СitiesListPlaceholder';

import './CitiesList.css';

const CitiesList: React.FC = () => {
	const resultCities: Array<string> = useSelector((state: any) => state.app.resultCities);
	const openedCity: null | number = useSelector((state: any) => state.app.openedCity);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	}, [resultCities]);

	return <>
		{
			resultCities.length ? <ul className="cities-list">
			{
				resultCities.map((city, index) => <City
					key={index}
					cityNumber={index + 1}
					cityName={city}
					isOpened={!!(openedCity === index + 1)}
				/>)
			}
			</ul> : <CitiesListPlaceholder/>
		}
	</>
}

export default CitiesList;
