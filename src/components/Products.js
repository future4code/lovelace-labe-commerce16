import React from "react";
import { BigContainer, HeadingProducts } from "../App.styles";
import ProductCard from "./ProductCard";

export default class Products extends React.Component {
  render() {
    return (
      <BigContainer>
        <HeadingProducts>
          <p>
            Quantidade de produtos: <span>2</span>
          </p>
          <label>
            Ordenação:
            <select>
              <option value="crescente" selected>
                Crescente
              </option>
              <option value="decrescente">Decrescente</option>
            </select>
          </label>
        </HeadingProducts>
        <ProductCard />
      </BigContainer>
    );
  }
}
