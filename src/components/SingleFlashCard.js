function SingleFlashCard(){
    function openCard(){
        alert('hello world');
    }
    const perguntas = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4',
    'Pergunta 5', 'Pergunta 6', 'Pergunta 7', 'Pergunta 8'];
    return (
        <>
        {perguntas.map(item => 
                <div className='single-card' onClick={openCard}><p>{item}</p>
            <div className='logo-pointer'><img src='./images/setinha.png' /></div></div>)}
        </>    
    );
}

export default SingleFlashCard;