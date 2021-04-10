import './App.css';
import React from 'react';
// import Stock from './components/Stock';
import Stocks from './components/Stocks';
import Search from './components/Search';

function App() {
  const [stocks, setStocks] = React.useState([]);

  const addStock = (stock) => {
      const id = stocks.length+1;
      const newStock = { id, ...stock};
      setStocks([...stocks, newStock]);
  };

  return (
    <div className="App">
        <Search onAddStock={addStock}/>
        <Stocks stocks = {stocks}/>
    </div>
  );
}

export default App;
