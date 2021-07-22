import React from "react";
import { GlobalStyle } from "./App.styles";
import { AppContainer } from "./App.styles";
import Filters from "./components/Filters";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "Produto 1",
        preco: 100,
        imagem: "https://picsum.photos/200",
      },
      {
        id: 2,
        nome: "Produto 2",
        preco: 100,
        imagem: "https://picsum.photos/200",
      },
      {
        id: 3,
        nome: "Produto 3",
        preco: 100,
        imagem: "https://picsum.photos/200",
      },
    ],
  };

  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <Filters />
        <Products />
        <ShoppingCart />
      </AppContainer>
    );
  }
}
