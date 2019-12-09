import React, { FormEvent } from 'react';

import CitiesValidation from '../../../helpers/cities-validation';

import { useSelector, useDispatch } from 'react-redux';
import { cityInputTextChange, setCities, setTip, clearCities } from '../../../store/app/actions';

import Button from '../../basic/Button/Button';
import Icon from '../../basic/Icons/Icon';

import Input from '../../basic/Input/Input';
import { MessageType, Message } from '../../../helpers/messages';

import './CityInput.scss';

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

		const result: any = citiesValidation.findCity(playerCity, cities, resultCities);
		const isSuccessCity: boolean = result.message.type === MessageType.SUCCESS;

		if (isSuccessCity) {
			const { resultCities, message } = result;
			dispatch(setCities(resultCities));
			dispatch(setTip(message));
		} else {
			const { message } = result;
			dispatch(setTip(message));
		}

		dispatch(cityInputTextChange(''));
	}

	const handleRestartClick = (): void => {
		const message: Message = {
			type: MessageType.EMPTY,
			text: ''
		}

		dispatch(setTip(message));
		dispatch(clearCities());
		dispatch(cityInputTextChange(''));
	};

	const handleTextChange = ({ target }: any) => dispatch(cityInputTextChange(target.value));

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
				<Icon type="restart" />
			</Button>
			<Input
				value={cityInput}
				placeholder={"Введите свой город здесь..."}
				onChange={handleTextChange}
			/>
			<Button
				type="submit"
				disabled={!cityInput}
			>
				<Icon type="done" />
			</Button>
		</form>
	);
}

export default CityInput;
