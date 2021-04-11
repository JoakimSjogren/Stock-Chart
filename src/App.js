import './App.css';
import React from 'react';
import Stocks from './components/Stocks';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [stocks, setStocks] = React.useState([]);

  const addStock = (stock) => {
      const id = stocks.length+1;
      const newStock = { id, ...stock};
      setStocks([...stocks, newStock]);
  };

  return (
    <div className="App">
        <Header></Header>
        <Search onAddStock={addStock}/>
        <Stocks stocks = {stocks}/>
    </div>
  );
}

export default App;
