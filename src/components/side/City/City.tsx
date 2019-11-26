import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setOpenedCity } from '../../../store/app/actions';

import Icon from '../../basic/Icons/Icon';

import './City.css';

interface ICity {
	cityNumber: number;
	cityName: string;
	isOpened: boolean;
}

const City: React.FC<ICity> = ({ cityNumber, cityName, isOpened }) => {
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
				<Icon type="collapse"/>
			</button>
		</section>
		{
			(isOpened && cityInfo) && <section className="city-item__info-panel">
				{
					`${cityInfo.textContent}...`
				}
			</section>
		}
	</article>;
}

export default City;
