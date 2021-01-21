import React, { useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import City from '../City/City';
import CitiesListPlaceholder from '../СitiesListPlaceholder/СitiesListPlaceholder';

import { useSelector } from 'react-redux';

import './CitiesList.scss';

const CitiesList: React.FC = () => {
	const { resultCities, openedCity } = useSelector(({ app }: any) => app);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	}, [resultCities.length]);

	return <>
		{
			resultCities.length ? <ul className="cities-list">
				<TransitionGroup>
					{
						resultCities.map((city: string, index: number) => <CSSTransition
							key={index}
							timeout={300}
							classNames="cities-list-item__fade"
						>
							<City
								key={index}
								num={index + 1}
								name={city}
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
