import React from "react";
import { CardContainer, Card } from "../App.styles";

export default class ProductCard extends React.Component {
  render() {
    return (
      <CardContainer>
        <Card>
          <div>
            <img alt="imagem" src="https://picsum.photos/200" />
          </div>
          <div className="desc">
            <p>Produto 1</p>
            <p>R$ 200,00</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </Card>

        <Card>
          <div>
            <img alt="imagem" src="https://picsum.photos/200" />
          </div>
          <div className="desc">
            <p>Produto 1</p>
            <p>R$ 150,00</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </Card>

        <Card>
          <div>
            <img alt="imagem" src="https://picsum.photos/200" />
          </div>
          <div className="desc">
            <p>Produto 1</p>
            <p>R$ 1000,00</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </Card>

        <Card>
          <div>
            <img alt="imagem" src="https://picsum.photos/200" />
          </div>
          <div className="desc">
            <p>Produto 1</p>
            <p>R$ 100,00</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </Card>
      </CardContainer>
    );
  }
}
