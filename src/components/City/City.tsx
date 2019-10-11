import React from 'react';
import './City.css';
import CollapseIcon from '../Icons/CollapseIcon';

interface ICity {
	cityName: string;
}

const City: React.FC<ICity> = (props) => {
	const { cityName } = props;

	return (
		<div className="city-item">
			<span className="city-item__city-name">{cityName}</span>
			<button className="city-item__open-info-button">
				<CollapseIcon/>
			</button>
			{/* INFO PANEL */}
		</div>
	);
}

export default City;
