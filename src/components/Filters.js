import React from "react";
import { SmallContainer } from "../App.styles";

export default class Filters extends React.Component {
  render() {
    return (
      <SmallContainer>
        <h3>Filtros</h3>
        <p>Valor mínimo:</p>
        <input />
        <p>Valor máximo:</p>
        <input />
        <p>Buscar por nome:</p>
        <input />
      </SmallContainer>
    );
  }
}
