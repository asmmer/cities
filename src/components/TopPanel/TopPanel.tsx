import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './TopPanel.css';
import Button from '../Button/Button';
import { clearCities, setTip } from '../../store/app/actions';
import RestartIcon from '../Icons/RestartIcon';

const TopPanel: React.FC = () => {
    const resultCities: Array<string> = useSelector((state: any) => state.app.resultCities);
    const dispatch = useDispatch();

    const handleRestartClick = (): void => {
        dispatch(setTip(''));
        dispatch(clearCities());
    };

	return (<div className="top-panel">
        <Button
            type="button"
            disabled={!resultCities.length}
            onClick={handleRestartClick}
        >
            <RestartIcon/>
        </Button>
        <h1 className="top-panel__project-name">Cities</h1>
	</div>)
}

export default TopPanel;
