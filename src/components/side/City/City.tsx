import React, { useState, useEffect } from 'react';
import Icon, { Icons } from '../../basic/Icons/Icon';

import { useDispatch } from 'react-redux';
import { setOpenedCity } from '../../../store/app/actions';

import './City.scss';

interface ICity {
	num: number;
	name: string;
	isOpened: boolean;
}

const getWikiURL = (cityName: string) => {
	return (
		`https://ru.wikipedia.org/w/api.php?action=query&list=
		search&prop=info&inprop=url&utf8=&format=json&origin=
		*&srlimit=20&srsearch=${cityName}`
	)
}

const City: React.FC<ICity> = ({ num, name, isOpened }) => {
	const [cityInfo, setCityInfo] = useState();
	const dispatch = useDispatch();

	const handleCollapseClick = () =>  dispatch(setOpenedCity(isOpened === true ? null : num));

	useEffect(() => {
		const wikiURL = getWikiURL(name);
		fetch(wikiURL)
			.then(response => response.json())
			.then(data => {
				const str = `<span>${data.query.search.shift().snippet}</span>`;
				const result: any = new DOMParser().parseFromString(str, "text/xml").firstChild;

				setCityInfo(result);
			});
	}, [name])

	return (
		<article className={`city-item${isOpened ? ' is-expanded' : ''}`}>
			<section className="city-item__top-panel">
				<span className="city-item__city-name">
					{`${num}. ${name}`}
				</span>
				<button
					className={`city-item__open-info-button${isOpened ? ' is-expanded-icon' : ''}`}
					onClick={handleCollapseClick}
				>
					<Icon type={Icons.Collapse}/>
				</button>
			</section>
			{
				(isOpened && cityInfo) && <section className="city-item__info-panel">
					{
						`${cityInfo.textContent}`
					}
				</section>
			}
		</article>
	)
}

export default City;
