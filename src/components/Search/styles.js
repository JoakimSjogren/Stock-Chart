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
          border: 1px solid black;
          text-align: center;
          text-transform:uppercase;
     }
     && button {
          width: 50vw;
          background-color: green;
          cursor: pointer;
          border: 1px solid black;
     }
`;