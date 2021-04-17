import styled from 'styled-components';

export const SearchStyled = styled.div` 
     /* border-bottom: 1px solid black; */
     display: flex;
     justify-content: center;
     margin: 0;
     padding: 0;
`;

export const FormStyled = styled.form` 
     margin: 0;
     padding: 0;
     display: flex;
     && input {
          width: 50vw;
          height: 4vw;
          font-size: 3em;
          padding: 0;
          border: 1px solid black;
          text-align: center;
          text-transform:uppercase;
     }
     && button {
          width: 50vw;
          height: 100%;
          font-size: 3em;
          background-color: green;
          cursor: pointer;
          padding: 0;
          border: 1px solid black;
     }
`;