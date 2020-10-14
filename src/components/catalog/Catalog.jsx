import React from 'react';

import Data from '../../data/items.json'

import Card from '../card'

const Catalog = () => {    
    return (
    <>
    <div className="container">
        <h1>Мои покупки</h1>
        <span className="history">История покупок </span>
    </div>
    {
        Data.map((item) => (
        <Card key={item.id} item={item} />
        ))
    }
    </>
    )
}

export default Catalog;