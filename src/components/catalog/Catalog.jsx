import React from 'react';

import Data from '../../data/items.json'

import Card from '../card'
import Headline from '../headline'

import './catalog.scss';

const Catalog = () => {    
    return (
    <div className="container">
        <Headline />
        {
            Data.map((item) => (
            <Card key={item.order_id} item={item} />
            ))
        }
    </div>
    )
}

export default Catalog;