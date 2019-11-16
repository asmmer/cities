import React, { useState } from 'react';
import CollapseIcon from '../Icons/CollapseIcon';

import './City.css';

interface ICity {
	cityNumber: number;
	cityName: string;
}

const City: React.FC<ICity> = (props) => {
	const { cityNumber, cityName } = props;
	const [isOpened, setIsOpened] = useState(false);

	let resultSnippet;

	const handleCollapseClick = () => setIsOpened(!isOpened);

	const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${cityName}`;
	fetch(endpoint)
		.then(response => response.json())
		.then(data => {
			const results = data.query.search;
			resultSnippet = results[0].snippet;
			console.log(resultSnippet);
		})
		.catch(() => console.log('An error occurred'));

	return <article className="city-item">
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
				{resultSnippet}
			</section>
		}

	</article>;
}

export default City;
