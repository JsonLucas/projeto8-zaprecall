function BodyMobile(){
    function renderInitial(){
        return (
            <section className='section-recalls'>
                <div className='container'>
                    <div className='initial'>
                        <div className='logo'></div>
                        <div className='name-logo'>Teste de renderização</div>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section className='section-initial'>
            <div className='container'>
                <div className='initial'>
                    <div className='logo'>
                        <img src='./images/logo.png' />                    
                    </div>
                    <div className='name-logo'>Zap Recall</div>
                    <input type='button' value='Iniciar Recall!' 
                    className='bt-init' onClick={renderInitial}/>
                </div>
            </div>
        </section>
    );
}

export default BodyMobile;