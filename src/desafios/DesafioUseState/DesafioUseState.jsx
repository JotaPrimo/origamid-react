import React, { useEffect, useState } from 'react';
import ButtonDesafio from './ButtonDesafio';
import './DesafioUseState.css';
import ImageProduto from './ImageProduto';

function DesafioUseState() {
  const [produto, setProduto] = useState({});
  const [loading, setLoading] = useState();

  useEffect(() => {
    changeProduto('tablet');
  }, []);

  async function changeProduto(produto) {
    setLoading(true);
    const dataProduto = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const dataProdutoJson = await dataProduto.json();
    setProduto(dataProdutoJson);
    setLoading(false);
  }

  return (
    <div>
      {loading && <span>Loaging data</span>}

      {!loading && (
        <div>
          <ImageProduto
            nome={produto.nome}
            preco={produto.preco}
            altImage={produto.nome}
            descricao={produto.descricao}
            urlImage={produto?.fotos ? produto.fotos[0].src : null}
          />
          <div className="produto-actions">
            <ButtonDesafio
              label="Tablet"
              classStyle={'button button-green'}
              onClick={() => changeProduto('tablet')}
            />
            <ButtonDesafio
              label="Smartphone"
              classStyle={'button button-blue'}
              onClick={() => changeProduto('smartphone')}
            />
            <ButtonDesafio
              label="Notebook"
              classStyle={'button button-warning'}
              onClick={() => changeProduto('notebook')}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DesafioUseState;
