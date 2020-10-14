import React from 'react';

const Label = (props) => {
return(
    <div className="status-bar">
        <p>{props.status.status}</p>
        <p>
            <span>{props.status.option[0]}</span>: <span>{props.status.option[1]}</span>
            <span>Время до завершения:</span><span>{props.status.time_left}</span>
        </p>
    </div>
)
}

export default Label;