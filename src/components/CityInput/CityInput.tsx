import React, { FormEvent } from 'react';

import CitiesValidation from '../../cities-validation';

import { useSelector, useDispatch } from 'react-redux';
import { cityInputTextChange, setCities, setTip, clearCities } from '../../store/app/actions';

import Button from '../Button/Button';
import RestartIcon from '../Icons/RestartIcon';
import DoneIcon from '../Icons/DoneIcon';

import './CityInput.css';

const citiesValidation = new CitiesValidation();

const CityInput: React.FC = () => {
	const dispatch = useDispatch();
	const { cityInput, cities, resultCities } = useSelector((state: any) => state.app);
	
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

    const handleRestartClick = (): void => {
        dispatch(setTip(''));
        dispatch(clearCities());
    };

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e;	
		dispatch(cityInputTextChange(target.value));
	}

	return (
		<form 
			className="city-input-container"
			onSubmit={handleSubmit}
		>
			<Button
				type="button"
				disabled={!resultCities.length}
				onClick={handleRestartClick}
			>
				<RestartIcon/>
			</Button>
			<input
				className="city-input-container__input" 
				onChange={handleTextChange}
				value={cityInput}
				type="text"
				placeholder="Введите свой город здесь..."
			/>
			<Button
				type="submit"
				disabled={!cityInput}
			>
				<DoneIcon/>
			</Button>
		</form>
	);
}

export default CityInput;
