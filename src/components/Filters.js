import React from "react";
import { SmallContainer } from "../App.styles";

export default class Filters extends React.Component {
  render() {
    return (
      <SmallContainer>
        <h3>Filtros</h3>
        <p>Valor mínimo:</p>
        <input type="number" value="100" />
        <p>Valor máximo:</p>
        <input type="number" value="100" />
        <p>Buscar por nome:</p>
        <input type="text" value="Produto 1" />
      </SmallContainer>
    );
  }
}
