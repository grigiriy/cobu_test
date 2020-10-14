import React from 'react';

import './status.scss';

const Label = (props) => {
return(
    <div className="status-wrapper">
        <p>{props.status.status}</p>
            <div>{props.status.option[0]}:<span>{props.status.option[1]}</span></div>
            <div>Время до завершения:<span>{props.status.time_left}</span></div>
    </div>
)
}

export default Label;