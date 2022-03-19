import Body from './components/Body';
import Initial from './components/Initial';
import { useState } from 'react';
import './assets/css/style.css';
import './assets/css/media.css';
function App() {
  const [init, setInit] = useState(false);
  const [restart, setRestart] = useState(false);
  if((init) && !(restart)){
    return(
      <main className='main'>
        <Body unsetInit={setInit} setRestart={setRestart}/>
      </main>
    ); 
  }else{
    return (
      <main className='main'>
        <Initial setInit={setInit} unsetRestart={setRestart}/>
      </main>
    );
  }
}

export default App;
