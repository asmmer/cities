import React, { FormEvent, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './CityInput.css';
import { cityInputTextChange, addCity } from '../../store/app/actions';

const CityInput: React.FC = () => {
	const dispatch = useDispatch();
	const cityInput = useSelector((state: any) => state.app.cityInput);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(addCity(cityInput));
		dispatch(cityInputTextChange(''));
	}

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e;	
		dispatch(cityInputTextChange(target.value));
	}

	return (
		<form 
			className="city-input-container"
			onSubmit={handleSubmit}
		>
			<input
				className="city-input-container__input" 
				onChange={handleTextChange}
				value={cityInput}
				type="text"
			/>
			<button
				className="city-input-container__enter" 
				type="submit"
			>Enter</button>
		</form>
	);
}

export default CityInput;
