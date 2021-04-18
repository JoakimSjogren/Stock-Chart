import React from 'react';
import { CandleStyled } from './styles';

const CandleStick = ({day, highest, lowest, onShowInfo}) => {
    
    const open = day['1. open'];
    const high = day['2. high'];
    const low = day['3. low'];
    const close = day['4. close'];

    // let yPosition = Math.floor(Math.random() * 90);
    let height = (highest-lowest) / (high-low);
    let yPosition = ((highest-lowest) / close) * 50;


    let topLineHeight;
    let outerLineHeight;
    let bottomLineHeight;
    //Green days
    if (close > open) {
        topLineHeight = high - close;
        outerLineHeight = close - open;
        bottomLineHeight = open - low;
    }
    //Red Days
    else {
        topLineHeight = high - open;
        outerLineHeight = open - close;
        bottomLineHeight = close - low;
    }
    
    let change = (close > open ? 'green' : 'red');
    return (
        <CandleStyled>
           
           <div className = "candle-container" 
                onMouseOver={e => onShowInfo([open, high, low, close])}
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