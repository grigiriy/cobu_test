import React from 'react';
import classNames from 'classnames';

import './label.scss';


const Label = (props) => {
    let $classNames = classNames('label',props.val>60?'good':'medium')
    return(
    <div className="label-wrapper">
        <span className={$classNames}>{props.val}%</span>
    </div>
    )
}

export default Label;