import styled from 'styled-components';

export const GraphStyled = styled.div` 
background-color: lightgray;
     border: 1px solid black;
     border-bottom: none;
     width: 50vw;
     height: 30vw;
     margin: 0;
     padding: 0;
     display: flex;
     flex-direction: row-reverse
`;

export const GraphPricesContainer = styled.div` 
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: flex-end;
     height: 30vw;
     width: 25vw;
     & h2 {
          margin: 1vw 0;
          font-size: 2rem;
          @media (max-width: 1250px) {
               font-size: 1.2em;
          }
          @media (max-width: 650px) {
               font-size: .8em;
          }
     }
`;

export const ChartValues = styled.div` 
     width: 25vw;
     display: flex;
     flex-direction: column;
     & h2 {
          height: 100%;
          text-align: center;
          border-top: 1px solid black;
          margin: 0;
          font-size: 2.8rem;
          @media (max-width: 1250px) {
               font-size: 1.5em;
          }
          @media (max-width: 650px) {
               font-size: 1em;
          }
     }
`;