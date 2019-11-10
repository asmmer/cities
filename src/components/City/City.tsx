import React from 'react';
import './City.css';
import CollapseIcon from '../Icons/CollapseIcon';
import Button from '../Button/Button';

interface ICity {
	cityName: string;
}

const City: React.FC<ICity> = (props) => {
	const { cityName } = props;

	let resultSnippet;

	const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${cityName}`;
	fetch(endpoint)
		.then(response => response.json())
		.then(data => {
			const results = data.query.search;
			resultSnippet = results[0].snippet;
			console.log(resultSnippet);
		})
		.catch(() => console.log('An error occurred'));

	return (
		<div className="city-item">
			<span className="city-item__city-name">{cityName}</span>
			<button className="city-item__open-info-button">
				<CollapseIcon />
			</button>
			{/* INFO PANEL */}
			<section>
				{resultSnippet}
			</section>
		</div>
	);
}

export default City;
