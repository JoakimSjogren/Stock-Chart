import React from 'react';
import Stock from '../Stock';
import { HeaderStyled } from './styles';

const Stocks = ({ stocks, onShowStockInGraph }) => {
    return (
        <div>
            <HeaderStyled>
                <div>
                    <h5>Ticker</h5>
                </div>
                <div>
                    <h5>Price</h5>
                </div>
                <div>
                    <h5>Todays % gain/loss</h5>
                </div>
                <div>
                    <h5>Todays $ gain/loss</h5>
                </div>
                <div>
                    <h5>Volume</h5>
                </div>
            </HeaderStyled>
            {stocks.map((stock) => (
                <Stock onShowStockInGraph={onShowStockInGraph} key = {stock.id} stock={stock}/>
            ))}
        </div>
    )
};

export default Stocks;
