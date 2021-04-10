// import react from 'react';

const Stock = ({ stock }) => {
    let ticker = stock['Meta Data']['2. Symbol'].toUpperCase();
    
    const daysValues = stock['Time Series (Daily)'];
    let lastClose = daysValues[Object.keys(daysValues)[0]]['4. close'];
    lastClose = (Math.round(lastClose * 100) / 100).toFixed(2);
    //Get all close values
    // for (var key in  stock['Time Series (Daily)']) {
    //     console.log(stock['Time Series (Daily)'][key]['4. close']);
    // }
    
    return (
        <div>
            <h3>{ticker}</h3>
            <h5>{lastClose}</h5>
        </div>
    )
};

export default Stock;