import Body from './components/Body';
import Initial from './components/Initial';
import { useState } from 'react';
import './assets/css/style.css';
import './assets/css/media.css';
function App() {
  const deckReact = {
    name:'React', 
    questions:['O que é JSX?', 'O React é __', 'Componentes devem iniciar com __', 
      'Podemos colocar __ dentro do JSX', 'O ReactDOM nos ajuda __', 'Usamos o npm para __', 
      'Usamos props para __', 'Usamos estado (state) para __'],
    answers: ['Uma extensão de linguagem do JavaScript', 'uma biblioteca JavaScript para construção de interfaces', 
    'letra maiúscula', 'expressões', 'interagindo com a DOM para colocar componentes React na mesma', 
    'gerenciar os pacotes necessários e suas dependências', 'passar diferentes informações para componentes ', 
    'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente']
  };
  const deckTeste = {
    name: 'Teste',
    questions: ['Pergunta 1', 'Pergunta 2','Pergunta 3','Pergunta 4',
    'Pergunta 5','Pergunta 6','Pergunta 7','Pergunta 8'],
    answers: ['Resposta 1', 'Resposta 2','Resposta 3','Resposta 4',
    'Resposta 5','Resposta 6','Resposta 7','Resposta 8']
  }
  const [init, setInit] = useState(false);
  const [restart, setRestart] = useState(false);
  const [goalZaps, setGoalZaps] = useState(0);
  const [deck, setDeck] = useState(deckReact.name);
  let selectedDeck = {};
  switch(deck){
    case 'React': selectedDeck = deckReact; break;
    case 'Teste': selectedDeck = deckTeste; break;
    default: selectedDeck = deckReact; break;
  }
  if((init) && !(restart)){
    return(
      <main className='main'>
        <Body unsetInit={setInit} setRestart={setRestart} goalZaps={goalZaps} 
        unsetGoalZaps={setGoalZaps} deck={selectedDeck} />
      </main>
    ); 
  }else{
    return (
      <main className='main'>
        <Initial setInit={setInit} unsetRestart={setRestart} goalZaps={goalZaps} 
        setGoalZaps={setGoalZaps} setDeck={setDeck}/>
      </main>
    );
  }
}

export default App;
