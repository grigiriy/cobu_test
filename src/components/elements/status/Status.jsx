import React from 'react';

import './status.scss';

import Angle from '../../../icons/angle.jsx';

const Label = (props) => {
return(
    <div className="status-wrapper">
        <p><span>{props.status.status}</span> <Angle /></p>
        <div>{props.status.option[0]}:<span>{props.status.option[1]}</span></div>
        <div>Время до завершения:<span>{props.status.time_left}</span></div>
    </div>
)
}

export default Label;