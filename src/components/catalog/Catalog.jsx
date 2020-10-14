import React from 'react';

import Data from '../../data/items.json'

import Card from '../card'
import Headline from '../headline'

import './catalog.scss';

const Catalog = () => {    
    return (
    <div className="container">
        <div className="row">
            <Headline />
        </div>
        <div className="row">
        {
            Data.map((item) => (
                <Card key={item.order_id} item={item} />
                ))
            }
        </div>
    </div>
    )
}

export default Catalog;