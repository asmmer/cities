import React from 'react';

import './СitiesListPlaceholder.scss';

const СitiesListPlaceholder: React.FC = () => <section className="cities-list__placeholder">
    <section className="cities-list__placeholder__header">
        <h2>Список городов пуст.</h2>
    </section>
    <section className="cities-list__placeholder__secondary-info">
        <h3>Введите в поле любой существующий город России, чтобы начать игру.</h3>
    </section>
</section>

export default СitiesListPlaceholder;
