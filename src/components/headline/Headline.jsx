import React from 'react';

import './headline.scss';

import Arrow from '../../icons/arrow.jsx';

const Headline = () => {    
    return (
        <div className="headline">
            <h1>Мои покупки</h1>
            <a href="#" className="history">
                <span>История покупок</span>
                <Arrow />
            </a>
        </div>
    )
}

export default Headline;