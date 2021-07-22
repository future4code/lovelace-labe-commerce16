import React from "react";
import { SmallContainer } from "../App.styles";
import ShoppingCartItem from "./ShoppingCartItem";

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <SmallContainer>
        <h3>Carrinho:</h3>
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />

        <div>
          Valor total: <span>R$70,00</span>
        </div>
      </SmallContainer>
    );
  }
}
