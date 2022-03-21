import { Fragment } from 'react';
import StartButton from './StartButton';
function SelectDeck({setSelectedDeck, setInit, unsetRestart, btnDisabled}){
    function start(){
        unsetRestart(false);
        setInit(true);
    }
    return(
        <Fragment>
            <div className='decks'>
                <select className='select-deck' onChange={setSelectedDeck}>
                    <option value='0'>Selecione um deck</option>
                    <option value='React'>Deck React</option>
                    <option value='Teste'>Deck Teste</option>
                </select>
            </div>
            <StartButton param={start} disabled={btnDisabled}/>
        </Fragment>
    );
}

export default SelectDeck