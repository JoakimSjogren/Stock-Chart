import React from 'react';

const Search = ({ onAddStock }) => {
    const [search, setSearch] = React.useState('')
    
    const searchForStock = () => {
        if (search.length <= 0) {
            return;
        }
        fetchStock(search);
        console.log("Searching for tickerSymbol: " + search);

        //Todo: reset input
    };
    

    const fetchStock = (ticker) => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=NUNMQUFV7AFVRRCW`)    
        .then((res) => res.json())
        .then((json) => {
            onAddStock(json);
        });
    }
    return (
        <div>
        
            <input type="text" onChange={e => setSearch(e.target.value)}/>
            <button onClick={() => searchForStock()}>Add stock</button>
        
        </div>
    )
};

export default Search;