import Body from './components/Body';
import Initial from './components/Initial';
import { useState } from 'react';
import './assets/css/style.css';
import './assets/css/media.css';
function App() {
  const [init, setInit] = useState(false);
  const [restart, setRestart] = useState(false);
  const [goalZaps, setGoalZaps] = useState(0);
  if((init) && !(restart)){
    return(
      <main className='main'>
        <Body unsetInit={setInit} setRestart={setRestart} goalZaps={goalZaps}/>
      </main>
    ); 
  }else{
    return (
      <main className='main'>
        <Initial setInit={setInit} unsetRestart={setRestart} setGoalZaps={setGoalZaps}/>
      </main>
    );
  }
}

export default App;
