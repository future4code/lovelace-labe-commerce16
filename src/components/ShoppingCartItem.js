import React from "react";
import { CartItem } from "../App.styles";

export default class ShoppingCartItem extends React.Component {
  render() {
    return (
      <CartItem>
        <span>2x</span>
        <span>Produto 1</span>
        <button>Remover</button>
      </CartItem>
    );
  }
}
