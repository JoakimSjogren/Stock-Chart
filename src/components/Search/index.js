import React from 'react';
import { SearchStyled, FormStyled } from './styles';
const Search = ({ onAddStock }) => {
    const [search, setSearch] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Prevented");
      };

    const searchForStock = (e) => {
        if (search.length <= 0) {
            return;
        }
        fetchStock(search);
        console.log("Searching for tickerSymbol: " + search);
    };
    

    const fetchStock = (ticker) => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=NUNMQUFV7AFVRRCW`)    
        .then((res) => res.json())
        .then((json) => {
            onAddStock(json);
            document.getElementById("search-form").reset();
        });
    }
    return (
        <SearchStyled>
            <FormStyled id = "search-form" onSubmit={handleSubmit}>
                <input type="text" onChange={e => setSearch(e.target.value)}/>
                <button onClick={(e) => searchForStock(e.target)}>Add stock</button>
            </FormStyled>
        </SearchStyled>
    )
};

export default Search;