import React from 'react';

import './price-label.scss';

const PriceLabel = (props) => {
return <div ><span className="price-label">Оплачено {props.val} ₽</span></div>
}

export default PriceLabel;