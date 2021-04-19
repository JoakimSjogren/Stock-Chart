import React from 'react';
import { CandleStyled } from './styles';

const CandleStick = ({day, highest, lowest, onShowInfo}) => {
    
    const open = day['1. open'];
    const high = day['2. high'];
    const low = day['3. low'];
    const close = day['4. close'];

    const heightToLowDiff = highest - lowest;
    // a = highest
    // b = lowest
    // c = high - low
    // (c - b) / (a - b) = c in %

    //Change based on greenOrRed
    // c = low ? if(gren) : c = high ? if(red) ?

    
    let topLineHeight;
    let outerLineHeight;
    let bottomLineHeight;
    //Green days
    if (close > open) {
        topLineHeight = (high - close) / heightToLowDiff * 100;
        outerLineHeight = (close - open) / heightToLowDiff * 100;
        bottomLineHeight = (open - low) / heightToLowDiff * 100;
    }
    //Red Days
    else {
        topLineHeight = (high - open) / heightToLowDiff * 100;
        outerLineHeight = (open - close) / heightToLowDiff * 100;
        bottomLineHeight = (close - low) / heightToLowDiff * 100;
    }
    
    // let yPosition = (close - lowest) / heightToLowDiff * 100;
    let yPosition = (topLineHeight + outerLineHeight + bottomLineHeight);
    yPosition += (low - lowest) / heightToLowDiff * 100;

    let change = (close > open ? 'green' : 'red');

    

    return (
        <CandleStyled onMouseOver={e => onShowInfo([open, high, low, close])}>
           
           <div className = "candle-container" 
                style = {{
                    top: `${100 - yPosition}%`,
                }}
                >
                <div className='top-line'
                    style = {{
                        height: `${topLineHeight}%`,
                    }}>
                </div>  
                <div className='outer-line' 
                    style = {{
                        background: (change),
                        height: `${outerLineHeight}%`
                    }}>
                </div> 
                <div className='bottom-line'
                 style = {{
                    height: `${bottomLineHeight}%`,
                }}>
                </div> 
            </div>
        </CandleStyled>
    )
}

export default CandleStick;