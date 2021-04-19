import styled from 'styled-components';

export const StockStyled = styled.div`
 background-color: lightblue;
 border-bottom: 1px solid black;
 margin: 0;
 height: 10vw;
 width: 100vw;
 display: flex;
 align-items: center;
 &:hover {
     background-color: lightskyblue;
     cursor: pointer;
}
& div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  width: 20%;
}
& h5, h3 {
    font-size: 4rem;
    @media (max-width: 1250px) {
          font-size: 1.2rem;
    }
    @media (max-width: 650px) {
          font-size: .8rem;
    }
}
  `;