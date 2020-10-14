import React from 'react';

const Card = (props) => {
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
                <h2>{props.item.name}</h2>
                <div className="percent">{props.item.percent}</div>
            </div>
            <div className="d-flex card-subheader">
                <div className="ration">
                    <span>el</span>
                    <span>{props.item.rating}</span>
                    <span>({props.item.reviews})</span>
                </div>
                <div className="order-id">№ заказа: {props.item.order_id}</div>
            </div>
            <div className="d-flex card-main">
                <div className="price"></div>
                <div className="price"></div>
            </div>
            <div className="d-flex card-footer">
                <p>{props.item.status.status}</p>
                <p>
                    <span>{props.item.status.option[0]}</span>: <span>{props.item.status.option[1]}</span>
                    <span>Время до завершения:</span><span>{props.item.status.left}</span>
                </p>
            </div>
        </div>
    </div>
</div>

)
}

export default Card;