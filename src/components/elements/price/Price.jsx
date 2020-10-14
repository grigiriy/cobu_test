import React from 'react';

import './price.scss';

const Price = (props) => {
return <div className="price">{props.count} шт. — {props.val} ₽</div>
}

export default Price;