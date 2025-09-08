import { useEffect, useState } from 'react';
import './App.css';
import Users from './pages/Users';

function App() {
  const [ativo, setAtivo] = useState(true);
  const [dados, setDados] = useState({ nome: 'Dados iniciais', idade: 0})

  useEffect(() => {
    // useEffect é executado na montagem ou na re-renderização componente
    console.log('Componente montou ou ativo mudou seu estado:', ativo);

    return () => {
      console.log('Componente vai desmontar ou ativo vai mudar seu estado');
    };
  }, [ativo]);


  useEffect( () => {
    console.log("Vou alterar os dados de user");   
  },[dados])

  function clicked() { 
    // isso aqui altera o state de ativo, como ativo é dependência do useEffect,  o react re-renderiza o compoente  
    setAtivo(!ativo); 
  }

  function handleSubmit() {
     setDados({ nome: 'Jailson Santos', idade: 30 })    
  }

  return (
    <>
      <button onClick={clicked} className="ativo">
        {ativo ? 'Ativo' : 'Inativo'}
      </button>
      <br />
      <button onClick={handleSubmit}>
        Alterar dados do usuário
      </button>

     <Users />
    </>
  );
}

export default App;
