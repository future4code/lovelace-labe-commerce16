import React from "react";
import { GlobalStyle } from "./App.styles";
import { AppContainer } from "./App.styles";
import Filters from "./components/Filters";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

export default class App extends React.Component {
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
