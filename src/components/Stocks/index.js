import React from 'react';
import Stock from '../Stock';

const Stocks = ({ stocks }) => {
    return (
        <div>
            {stocks.map((stock) => (
                <Stock key = {stock.id} stock={stock}/>
            ))}
        </div>
    )
};

export default Stocks;
