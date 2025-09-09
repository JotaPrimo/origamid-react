import React, { useEffect, useState } from 'react';
import ButtonDesafio from '../DesafioUseState/ButtonDesafio/ButtonDesafio';
import Preferencia from './Preferencia';
import type { Produto } from '../../interfaces/Produto.interface';

function DesafioEffectTwo() {
  const CHAVE_LOCAL_STORAGE = 'produto';
  const [preferencia, setPreferencia] = useState<string>('');
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    checarLocalStorage();
  }, []);

  async function buscarDados(params = 'smartphone') {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params}`)
      .then((response) => response.json())
      .then((data) => setProduto(data));
  }

  async function changePreferencia(preferenciaSelect: string) {
    await buscarDados(preferenciaSelect);
    salvarEmLocalStorage();  
   
     setPreferencia(preferenciaSelect);
  }

  function checarLocalStorage() {
    const preferenciaLocal = localStorage.getItem(CHAVE_LOCAL_STORAGE);

    if (preferenciaLocal != null) {
      setPreferencia(preferenciaLocal);
    }
  }

  function salvarEmLocalStorage() {
    localStorage.setItem(CHAVE_LOCAL_STORAGE, preferencia);
  }

  return (
    <div>
      {preferencia && produto && (
        <div>
          <h3>{preferencia}</h3>
          {
            <img
              src={produto?.fotos?.[0]?.src ?? ''}
              alt={produto?.fotos?.[0]?.src ?? ''}
              width="300px"
              height="300px"
            />
          }
        </div>
      )}
      <div style={{ display: 'flex', gap: 5, width: '100%' }}>
        <ButtonDesafio
          label={'Notebook'}
          classStyle={'button button-blue'}
          onClick={() => changePreferencia('notebook')}
        />
        <ButtonDesafio
          label={'Smartphone'}
          classStyle={'button button-blue'}
          onClick={() => changePreferencia('smartphone')}
        />
      </div>
      {produto && preferencia && (
        <Preferencia preferencia={produto.nome} valor={produto.preco} />
      )}
    </div>
  );
}

export default DesafioEffectTwo;
