import React from 'react';

import Star from '../../../icons/star.jsx';

import './rating.scss';

const Rating = (props) => {
return (
    <div className="rating">
        <Star color={`rgb(255,100,0)`} />
        {props.rating}
        <a href="javascriot:void(0)">(<span>{props.reviews}</span>)</a>
    </div>
)
}

export default Rating;