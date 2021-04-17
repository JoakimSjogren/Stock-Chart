// import react from 'react';
import { StockStyled } from './styles';

const Stock = ({ stock, onShowStockInGraph }) => {
    let ticker = stock['Meta Data']['2. Symbol'].toUpperCase();
    
    const daysValues = stock['Time Series (Daily)'];
    let lastClose = daysValues[Object.keys(daysValues)[0]]['4. close'];
    lastClose = (Math.round(lastClose * 100) / 100).toFixed(2);
    let volume = daysValues[Object.keys(daysValues)[0]]['5. volume'];
    let nextToLastClose = daysValues[Object.keys(daysValues)[1]]['4. close'];
    nextToLastClose = (Math.round(nextToLastClose * 100) / 100).toFixed(2);
    var difference =  Math.abs(lastClose - nextToLastClose);
    
    var percentageDiff = (difference / nextToLastClose) * 100
    percentageDiff = (Math.round(percentageDiff * 100) / 100).toFixed(2);
    difference = (Math.round(difference * 100) / 100).toFixed(2);
    //Get all close values
    // for (var key in  stock['Time Series (Daily)']) {
    //     console.log(stock['Time Series (Daily)'][key]['4. close']);
    // }
    var incText = (lastClose>nextToLastClose? "+" : "-");
    
    return (
        <StockStyled onClick={e => {onShowStockInGraph(daysValues)}}>
            <div>
                <h3>{ticker}</h3>
            </div>
            <div>
                <h5 style = {{color: lastClose>nextToLastClose? "green" : "red"}}>${lastClose}</h5>
            </div>
            <div>
                <h5 style = {{color: lastClose>nextToLastClose? "green" : "red"}}>{incText}{percentageDiff}%</h5>
            </div>
            <div>
                <h5 style = {{color: lastClose>nextToLastClose? "green" : "red"}}>{incText}${difference}</h5>
            </div>
            <div>
                <h5>{volume}</h5>
            </div>
        </StockStyled>
    )
};

export default Stock;