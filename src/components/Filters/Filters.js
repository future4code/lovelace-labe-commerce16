import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export class Filters extends React.Component {
  render() {
    return (
      <FiltersContainer>
        <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            onChange={this.props.onChangeMinFilter}
            value={this.props.minFilter}
            type="number"
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            onChange={this.props.onChangeMaxFilter}
            value={this.props.maxFilter}
            type="number"
          />
        </InputContainer>
        <InputContainer>
          Buscar por nome:
          <input
            onChange={this.props.onChangeNameFilter}
            value={this.props.nameFilter}
            type="text"
          />
        </InputContainer>
      </FiltersContainer>
    );
  }
}
