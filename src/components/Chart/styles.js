import styled from 'styled-components';

export const CandleStyled = styled.div` 
    display: flex;
    justify-content: center;
    width: 1%;
    height: 100%;
    & .candle-container {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        &:hover {
            background-color: lightcyan;
        }
        & .top-line {
            width: 50%;
            /* height: 45%; */
            background-color: black;
        }
        & .bottom-line {
            width: 50%;
            /* height: 20%; */
            background-color: black;
        }
        & .outer-line {
            width: 100%;
            /* height: 100%; */
        }
    }
`;