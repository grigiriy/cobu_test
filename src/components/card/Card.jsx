import React from 'react';

const Card = () => {
return (

<div className="card">
    <div className="col-left">
        <div className="image-wrapper">
            <button>wish</button>
            <img src="" alt=""/>
        </div>
    </div>
    <div className="col-right">
        <div className="content-wrapper">
            <div className="d-flex card-header">
                <h2>Наручные часы CASIO GA-100C-8A</h2>
                <div className="percent">99%</div>
            </div>
            <div className="d-flex card-subheader">
                <div className="ration">
                    <span>el</span>
                    <span>4.7</span>
                    <span>(18)</span>
                </div>
                <div className="order-id">№ заказа: 3-123-44-52</div>
            </div>
            <div className="d-flex card-main">
                <div className="price"></div>
                <div className="price"></div>
            </div>
            <div className="d-flex card-footer">
                <p>Ожидание завершения лота</p>
                <p>
                    <span>Срок лота:</span><span>24ч (прошло 22ч 40м)</span>
                    <span>Время до завершения:</span><span>1ч 20м</span>
                </p>
            </div>
        </div>
    </div>
</div>

)
}

export default Card;