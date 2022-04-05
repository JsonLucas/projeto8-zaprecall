import Message from './subcomponents/Message';
function Footer({icon, cont, avaliations, unsetInit, setRestart, goalZaps, unsetGoalZaps}){
    function restartRecall(){
        unsetInit(false);
        setRestart(true);
        unsetGoalZaps(0);
    }
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='progress'>
                    <Message avaliations={avaliations} cont={cont} goalZaps={goalZaps}/>
                    <div className='answers'>
                        {icon.map(item => 
                            <div className='avaliation-icons'>{item}</div>
                        )}
                    </div>
                    <div className='restart hidden'>
                        <button className='btn-restart' onClick={restartRecall}>REINICIAR RECALL</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export {Footer};