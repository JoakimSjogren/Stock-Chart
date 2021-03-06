import styled from 'styled-components';

export const CandleStyled = styled.div` 
    display: flex;
    justify-content: center;
    width: 1%;
    height: 100%;
    &:hover {
            background-color: lightcyan;
        }
    & .candle-container {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        & .top-line {
            width: 50%;
            background-color: black;
        }
        & .bottom-line {
            width: 50%;
            background-color: black;
        }
        & .outer-line {
            width: 100%;
        }
    }
`;