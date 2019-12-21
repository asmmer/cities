import React, { useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import City from '../City/City';
import CitiesListPlaceholder from '../СitiesListPlaceholder/СitiesListPlaceholder';

import { useSelector } from 'react-redux';

import './CitiesList.scss';

const CitiesList: React.FC = () => {
	const resultCities: Array<string> = useSelector((state: any) => state.app.resultCities);
	const openedCity: null | number = useSelector((state: any) => state.app.openedCity);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	}, [resultCities]);

	return <>
		{
			resultCities.length ? <ul className="cities-list">
				<TransitionGroup>
					{
						resultCities.map((city, index) => <CSSTransition
							key={index}
							timeout={300}
							classNames="cities-list-item__fade"
						>
							<City
								key={index}
								cityNumber={index + 1}
								cityName={city}
								isOpened={!!(openedCity === index + 1)}
							/>
						</CSSTransition>)
					}
				</TransitionGroup>
			</ul> : <CitiesListPlaceholder />
		}
	</>
}

export default CitiesList;
