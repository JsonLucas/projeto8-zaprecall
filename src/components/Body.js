import SectionFlashCards from './SectionFlashCards';
import Header from './Header';
import { Footer } from './Footer';
import { useState, Fragment } from 'react';
function Body({unsetInit, setRestart, goalZaps, unsetGoalZaps, deck}){ 
    const [icon, setIcon] = useState([]);
    const [cont, setCont] = useState(0);
    const [avaliations, setAvaliation] = useState([]);
    return (
        <Fragment>
            <section className='body'>
                <Header />
                <SectionFlashCards icon={icon} setIcon={setIcon} cont={cont} setCont={setCont} 
                avaliations={avaliations} setAvaliation={setAvaliation} deck={deck}/>
            </section>
            <Footer icon={icon} cont={cont} avaliations={avaliations} 
            unsetInit={unsetInit} setRestart={setRestart} goalZaps={goalZaps} unsetGoalZaps={unsetGoalZaps}/>
        </Fragment>
    );
}

export default Body;