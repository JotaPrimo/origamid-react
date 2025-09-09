import React, { useEffect, useState } from 'react';
import ButtonDesafio from './ButtonDesafio/ButtonDesafio';
import './DesafioUseState.css';
import ImageProduto from './ImageProduto';
import type { Produto } from '../../interfaces/Produto.interface';


function DesafioUseState() {
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    changeProduto('tablet');
  }, []);

  async function changeProduto(produto: string) {
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

      {!loading && produto && (
        <div>
          <ImageProduto
            nome={produto.nome}
            preco={produto.preco}
            altImage={produto.nome}
            descricao={produto.descricao}
            urlImage={produto?.fotos?.[0]?.src ?? ''}
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
