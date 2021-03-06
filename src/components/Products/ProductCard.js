import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`;

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  padding: 4px 8px;
  font-size: 24px;
`;

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <CardContainer>
        <img alt="imagem" src={product.photo} />
        <CardInfo>
          <p>{product.name}</p>
          <p>R${product.price},00</p>
          <AddToCartButton
            onClick={() => this.props.onAddProductToCart(product.id)}
          >
            <i class="fas fa-shopping-cart"></i>
          </AddToCartButton>
        </CardInfo>
      </CardContainer>
    );
  }
}
