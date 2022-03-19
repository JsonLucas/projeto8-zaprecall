import logo from './../assets/images/logo.png';
function Initial({setInit, unsetRestart}){
    function start(){
        setInit(true);
        unsetRestart(false);
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
                <button className='btn-start' onClick={start}>Iniciar Recall!</button>
            </div>
        </section>
    );
}
export default Initial;