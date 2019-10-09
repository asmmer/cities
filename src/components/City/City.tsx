import React from 'react';
import './City.css';

interface ICity {
	cityName: string;
}

const City: React.FC<ICity> = (props) => {
	const { cityName } = props;

	return (
		<div className="city-item">
			<span className="city-item__city-name">{cityName}</span>
			<button className="city-item__open-info-button">V</button>
		</div>
	);
}

export default City;
