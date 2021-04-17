import styled from 'styled-components';

export const HeaderStyled = styled.div`
    background-color: lightblue;
    border-bottom: 1px solid black;
    margin: 0;
    height: 5vw;
    width: 100vw;
    display: flex;
    align-items: center;
    font-size: 2.5em;
    & div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  width: 20%;
}
`;