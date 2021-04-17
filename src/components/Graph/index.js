import React from 'react';
import Chart from '../Chart';
import { GraphStyled, GraphPricesContainer, ChartValues } from './styles';
const Graph = (stock) => {
    let days = stock['stock']['graphStock'];
    
    let lowest;
    let highest;

    let daysValues = [];
    for (var key in days) {
       daysValues[key] = days[key];
    }
    let daysArray = Object.values(daysValues);
    
    // Find lowest and highest value
    daysArray.map((day) => (
        (lowest === undefined ? lowest = day['3. low'] : lowest),
        (highest === undefined ? highest = day['2. high'] : highest),
        (day['3. low'] < lowest ? lowest = day['3. low'] : lowest),
        (day['2. high'] > highest ? highest = day['2. high'] : highest)
    ));

    return (
        <>
            <GraphPricesContainer>
                <h2>{(highest !== undefined ? `${Math.floor(highest)}-` : '')}</h2>
                <h2>{(lowest !== undefined ? `${Math.floor(lowest)}-` : '')}</h2>
            </GraphPricesContainer>
            <GraphStyled>
                {daysArray.map((day) => (
                    <Chart key ={day['5. volume']} day = {day} highest = {highest} lowest = {lowest}></Chart>
                ))}
            </GraphStyled>
            <ChartValues>

            </ChartValues>
        </>
    )
}

export default Graph
