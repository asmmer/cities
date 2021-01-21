import React, { useCallback, FormEvent } from 'react';
import Button from '../../basic/Button/Button';
import Icon, { Icons } from '../../basic/Icons/Icon';
import Input from '../../basic/Input/Input';
import { IFindCityResult, MessageType } from '../../../common/interfaces';
import CitiesValidation from '../../../common/citiesValidation';

import { useSelector, useDispatch } from 'react-redux';
import { cityInputTextChange, setCities, setTip, clearCities } from '../../../store/app/actions';

import './CityInput.scss';

const CityInput: React.FC = () => {
	const dispatch = useDispatch();
	const { cityInput, cities, resultCities } = useSelector((state: any) => state.app);

	const handleSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();

		const playerCity = cityInput;
		if (playerCity === '') {
			return;
		}

		const result: any = CitiesValidation.findCity(playerCity, cities, resultCities);
		const isSuccessCity: boolean = result.message.type === MessageType.Success;

		if (isSuccessCity) {
			const { resultCities, message }: IFindCityResult = result;
			dispatch(setCities(resultCities));
			dispatch(setTip(message));
		} else {
			const { message } = result;
			dispatch(setTip(message));
		}

		dispatch(cityInputTextChange(''));
	}, [cities, cityInput, dispatch, resultCities]);

	const handleRestartClick = useCallback(() => {
		dispatch(setTip(''));
		dispatch(clearCities());
		dispatch(cityInputTextChange(''));
	}, [dispatch]);

	const handleTextChange = useCallback(({ target }) => {
		dispatch(cityInputTextChange(target.value));
	}, [dispatch]);

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
				<Icon type={Icons.Restart} />
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
				<Icon type={Icons.Done} />
			</Button>
		</form>
	);
}

export default CityInput;
