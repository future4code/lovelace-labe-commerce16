import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    padding: 1rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;  }
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BigContainer = styled.div`
  flex-grow: 1;
`;

export const HeadingProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const CardContainer = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const Card = styled.div`
  border: 1px solid black;

  img {
    width: 100%;
  }
  .desc {
    padding: 0 10px 10px 10px;
    p {
      margin: 8px 0;
    }
  }
`;

export const SmallContainer = styled.div`
  padding: 8px;
  border: 1px solid #222;
  width: 270px;
  height: 350px;

  p {
    margin: 0;
  }

  input {
    margin-bottom: 20px;
  }

  div {
    margin-top: 10px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  margin: 5px;
`;
