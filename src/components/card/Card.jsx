import React from 'react';

import './card.scss';

import Wish from '../elements/wish'
import Label from '../elements/label'
import Rating from '../elements/rating'
import PriceLabel from '../elements/price-label'
import Price from '../elements/price'
import Status from '../elements/status'

const Card = (props) => {

    return (
    <div className="card">
        <div className="row">
            <div className="col-left">
                <div className="image-wrapper">
                    <Wish />
                    <img src={require(`../../data/images/${props.item.image}`)} alt={props.item.name} />
                </div>
            </div>
            <div className="col-right">
                <div className="content-wrapper">
                    <div className="card-header">
                        <h2>{props.item.name}</h2>
                        <Label val={props.item.percent} />
                    </div>
                    <div className="card-subheader">
                        <Rating rating={props.item.rating} reviews={props.item.reviews} />
                        <div class="id-wrapper">
                            <Label val={props.item.percent} />
                            <div className="order-id">№ заказа: {props.item.order_id}</div>
                        </div>
                    </div>
                    <div className="card-main">
                        <div className="content">
                            <p>{props.item.about}</p>
                            <div className="atts">
                                <div>Цвет: <span>{props.item.color}</span></div>
                                <div>Размер: <span>{props.item.size}</span></div>
                            </div>
                        </div>
                        <div className="price-wrapper">
                            <Price count={props.item.count} val={props.item.price} />
                            <PriceLabel val={props.item.bet} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <Status status={props.item.status}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Card;