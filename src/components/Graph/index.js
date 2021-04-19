import React from 'react';
import Chart from '../Candlestick';
import { GraphStyled, GraphPricesContainer, ChartValues} from './styles';
const Graph = (stock) => {
    let days = stock['stock']['graphStock'];
    const [dayInfo, setDayInfo] = React.useState([]);
    const [mouseInside, setMouseInside] = React.useState(false);
    let lowest;
    let highest;

    let daysValues = [];
    for (var key in days) {
       daysValues[key] = days[key];
    }
    let daysArray = Object.values(daysValues);
    
   
    // Finds lowest and highest value
    for (var day in daysArray) {
       if (lowest === undefined ? lowest = daysArray[day]['3. low'] : lowest);
       if (highest === undefined ? highest = daysArray[day]['2. high'] : highest);
       if (daysArray[day]['3. low'] < lowest ? lowest = daysArray[day]['3. low'] : lowest);
       if (daysArray[day]['2. high'] > highest ? highest = daysArray[day]['2. high'] : highest);
     }

    const ShowInfo = (info) => {
        setDayInfo(info);
    }

    const mouseEnter = () => {
        setMouseInside(true);
      }
    const mouseLeave = () => {
        setMouseInside(false);
    }
    

    return (
        <>
            <GraphPricesContainer>
                <h2>{(highest !== undefined ? `${Math.floor(highest)}-` : '')}</h2>
                <h2>{(lowest !== undefined ? `${Math.floor(lowest)}-` : '')}</h2>
            </GraphPricesContainer>
            <GraphStyled onMouseEnter={e => {mouseEnter(e.target)}} onMouseLeave={e => {mouseLeave()}}>
                {daysArray.map((day) => (
                    <Chart onShowInfo = {ShowInfo} key ={day['5. volume']} day = {day} highest = {highest} lowest = {lowest}></Chart>
                ))}
            </GraphStyled>
            <ChartValues>  
                <h2>{(mouseInside && highest !== undefined ? `Open: ${parseFloat(dayInfo[0]).toFixed(2)}` : 'Open: ')}</h2>
                <h2>{(mouseInside && highest !== undefined ? `High: ${parseFloat(dayInfo[1]).toFixed(2)}` : 'High: ')}</h2>
                <h2>{(mouseInside && highest !== undefined ? `Low: ${parseFloat(dayInfo[2]).toFixed(2)}` : 'Low: ')}</h2>
                <h2>{(mouseInside && highest !== undefined ? `Close: ${parseFloat(dayInfo[3]).toFixed(2)}` : 'Close: ')}</h2>
            </ChartValues>
        </>
    )
}

export default Graph
