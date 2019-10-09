import React from 'react';
import './City.css';

interface ICitiesList {
	cities: Array<string>;
}

const CitiesList: React.FC<ICitiesList> = (props) => {
	const { cities } = props;

	return (
		<ul>

        </ul>
	);
}

export default CitiesList;
