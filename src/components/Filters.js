import React from "react";
import { SmallContainer } from "../App.styles";
export default class Filters extends React.Component {

  state = {
    inputValorMinimo: '',
    inputValorMaximo: '',
    inputBuscarProdutos: ''
  }

  onChangeInputValorMinimo = (event) => {
    this.setState ({inputValorMinimo: event.target.value})
  }

  onChangeInputValorMaximo = (event) => {
    this.setState ({inputValorMaximo: event.target.value})
  }

  onChangeInputBuscarProdutos = (event) => {
    this.setState ({inputBuscarProdutos: event.target.value})
  }




  render() {

    return (
      <SmallContainer>
        <h3>Filtros</h3>
        <p>Valor mínimo:</p>
        <input 
          value={this.state.inputValorMinimo} 
          onChange={this.onChangeInputValorMinimo} 
          type="number"/>
        <p>Valor máximo:</p>
        <input 
          value={this.state.inputValorMaximo} 
          onChange={this.onChangeInputValorMaximo}
          type="number"/>
        <p>Buscar por nome:</p>
        <input 
          value ={this.state.inputBuscarProdutos} 
          onChange={this.onChangeInputBuscarProdutos} 
          type="text"/>
        {/* <button onClick={}>Filtrar</button> */}
      </SmallContainer>
    );
  }
}
