import React, { useEffect, useState } from 'react';
import ButtonDesafio from './ButtonDesafio';
import './DesafioUseState.css';
import ImageProduto from './ImageProduto';

function DesafioUseState() {
  const [produto, setProduto] = useState({});  

  useEffect(() => {
    fetchTablet();
  }, []);

  async function fetchTablet() {
    const imageTablet = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/tablet',
    );
    const data = await imageTablet.json();
    setProduto(data);
  }

  async function fetchSmartphone() {
    const dataSmartphone = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/smartphone',
    );
    const dataProduto = await dataSmartphone.json();
    setProduto(dataProduto);
  }

  async function fetchNotebook() {
    const dataNotebook = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/notebook',
    );
    const dataProduto = await dataNotebook.json();
    setProduto(dataProduto);
  }

  async function changeProduto(produto) {
    const dataProduto = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
    const dataProdutoJson = await dataProduto.json();
    setProduto(dataProdutoJson);
  }

  return (
    <div>
      <ImageProduto
        nome={produto.nome}
        preco={produto.preco}
        altImage={produto.nome}
        descricao={produto.descricao}
        urlImage={produto?.fotos ? produto.fotos[0].src : null}
      />
      <div className="produto-actions">
        <ButtonDesafio label="Tablet" classStyle={'button button-green'} onClick={() => changeProduto('tablet')} />
        <ButtonDesafio label="Smartphone" classStyle={'button button-blue'} onClick={() => changeProduto('smartphone')} />
        <ButtonDesafio label="Notebook" classStyle={'button button-warning'} onClick={() => changeProduto('notebook')} />
      </div>
    </div>
  );
}

export default DesafioUseState;
