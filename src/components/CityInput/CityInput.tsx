import React, { FormEvent, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './CityInput.css';
import { cityInputTextChange, setCities, setTip } from '../../store/app/actions';
import CitiesValidation from '../../cities-validation';

const CityInput: React.FC = () => {
	const dispatch = useDispatch();
	const { cityInput, cities, resultCities, UIDictionary } = useSelector((state: any) => state.app);

	const citiesValidation = new CitiesValidation();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const playerCity = cityInput;
		if (playerCity === '') {
			return;
		}

        const result = citiesValidation.findCity(playerCity, cities, resultCities);
        if (result) {
            const { resultCities, tip } = result;
			dispatch(setCities(resultCities));
			dispatch(setTip(tip));
        }
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
				placeholder={UIDictionary.inputCity.inputCityHere}
			/>
			<button
				className="city-input-container__enter" 
				type="submit"
				disabled={!cityInput}
			>{UIDictionary.inputCity.enterCity}</button>
		</form>
	);
}

export default CityInput;
