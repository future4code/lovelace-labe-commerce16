import React from "react";
import { GlobalStyle } from "./App.styles";
import { AppContainer } from "./App.styles";
import Filters from "./components/Filters";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const produtos = [
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
]

export default class App extends React.Component {
  state = {
    inputValorMinimo: '',
    inputValorMaximo: '',
    inputBuscarProdutos: ''
  };

  onChangeInputValorMinimo = (event) => {
    this.setState ({inputValorMinimo: event.target.value})
  }

  onChangeInputValorMaximo = (event) => {
    this.setState ({inputValorMaximo: event.target.value})
  }

  onChangeInputBuscarProdutos = (event) => {
    this.setState ({inputBuscarProdutos: event.target.value})
  }

  // valorMaximo = (event) => {
  //   this.state.produtos.filter((valor) => {
  //     const 
  //   })
  // }

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
