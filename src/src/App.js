import Body from './components/Body';
import Initial from './components/Initial';
import { useState } from 'react';
import './assets/css/style.css';
import './assets/css/media.css';
function App() {
  let array;
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
    case 'React': 
      selectedDeck = deckReact; 
      array = shuffle(deckReact.questions);
    break;
    case 'Teste': 
      selectedDeck = deckTeste; 
      array = shuffle(deckTeste.questions)
      break;
    default: 
      selectedDeck = deckReact; 
      array = shuffle(deckReact.questions);
      break;
  }
  const mixedQuestions = array.map((item) => {
    return selectedDeck.questions[item];
  });
  const mixedAnswers = array.map((item) => {
      return selectedDeck.answers[item];
  });
  selectedDeck.questions = mixedQuestions;
  selectedDeck.answers = mixedAnswers;
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


function shuffle(questions){
  let array = [];
  for(let i = 0; i < questions.length; i++){
      array.push(Math.floor(Math.random()*questions.length));
  }
  array = validateArray(array, questions);
  return array;
}
function validateArray(array, questions){
  for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length; j++){
          if(i !== j){
              if(array[i] === array[j]){
                  array[j] = Math.floor(Math.random()*questions.length);
              }
          }
      }
  }
  return array;
}

export default App;
