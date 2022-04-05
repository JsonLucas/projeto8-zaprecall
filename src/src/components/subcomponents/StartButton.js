function StartButton({param, disabled}){
    if(disabled){
        return (
            <div className='start'>
                <button className='btn-start disabled' onClick={param}>Iniciar Recall!</button>
            </div>
        );
    }else{
        return (
            <div className='start'>
                <button className='btn-start' onClick={param}>Iniciar Recall!</button>
            </div>
        );
    }
}

export default StartButton;