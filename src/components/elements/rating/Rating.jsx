import React from 'react';

const Rating = (props) => {
return (
    <div className="rating">
        <span>el</span>
        <span>{props.rating}</span>
        <span>({props.reviews})</span>
    </div>
)
}

export default Rating;