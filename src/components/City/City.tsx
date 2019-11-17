import React, { useState, useEffect } from 'react';
import CollapseIcon from '../Icons/CollapseIcon';

import './City.css';
import { useDispatch } from 'react-redux';
import { setOpenedCity } from '../../store/app/actions';

interface ICity {
	cityNumber: number;
	cityName: string;
	isOpened: boolean;
}

const City: React.FC<ICity> = (props) => {
	const { cityNumber, cityName, isOpened } = props;
	const [cityInfo, setCityInfo] = useState();

	const dispatch = useDispatch();

	const handleCollapseClick = () =>  dispatch(setOpenedCity(isOpened === true ? null : cityNumber));

	useEffect(() => {
		const wikiURL = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${cityName}`;
		fetch(wikiURL)
			.then(response => response.json())
			.then(data => {
				const _data = `<span>${data.query.search.shift().snippet}</span>`;
				const result = new DOMParser().parseFromString(_data, "text/xml").firstChild;

				setCityInfo(result);
			});
	}, [cityName])

	return <article className={`city-item ${isOpened && 'city-item__expanded'}`}>
		<section className="city-item__top-panel">
			<span className="city-item__city-name">
				{`${cityNumber}. ${cityName}`}
			</span>
			<button
				className="city-item__open-info-button"
				onClick={handleCollapseClick}
			>
				<CollapseIcon />
			</button>
		</section>
		{
			(isOpened) && <section className="city-item__info-panel">
				{
					`${cityInfo.textContent}...`
				}
			</section>
		}
	</article>;
}

export default City;
