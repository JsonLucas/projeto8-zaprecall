import logo from './../assets/images/logo.png';
function Initial({setInit, unsetRestart, setGoalZaps}){
    function start(e){
        if(!e.target.classList.contains('disabled')){
            setInit(true);
            unsetRestart(false);
            setGoalZaps(parseInt(document.querySelector('.ipt-goal').value));
        }
    }
    function enableInit(e){
        const btInit = document.querySelector('.start > button');
        if(e.target.value !== ''){
            btInit.classList.remove('disabled');
        }else{
            btInit.classList.add('disabled');
        }
    }
    return (
        <section className='section-initial'>
            <div className='start-initial'>
                <div className='initial-logo'>
                    <img src={logo} />                    
                </div>
                <div className='initial-name-logo'>ZapRecall</div>
            </div>
            <div className='init-recall'>
                <div className='goal'>
                    <input type='number' className='ipt-goal' onChange={enableInit}
                    placeholder='Digite sua meta de zaps...' />
                </div>
                <div className='start'>
                    <button className='btn-start disabled' onClick={start}>Iniciar Recall!</button>
                </div>
            </div>
        </section>
    );
}
export default Initial;