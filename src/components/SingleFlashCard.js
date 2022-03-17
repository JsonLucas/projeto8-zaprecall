import { useState, Fragment } from 'react';
function SingleFlashCard(){
    function viewQuestion(e){
        const id = e.target.id;
        const filterId = parseInt(id[id.length-1]);
        const toShow = [...questionText];
        toShow[filterId] = questions[filterId];
        setQuestion(toShow);
        document.querySelector(`#${id}`).classList.add('hidden');
        document.querySelector(`#img-${filterId}`).classList.remove('hidden');
    }
    function viewAnswer(e){
        const id = e.target.id;
        const filterId = parseInt(id[id.length-1]);
        const toShow = [...questionText];
        toShow[filterId] = answers[filterId];
        setQuestion(toShow);
        document.querySelector(`#${id}`).classList.add('hidden');
        document.querySelectorAll('.btns')[filterId].classList.remove('hidden');
    }
    function cardAvaliation(e){
        const avaliationValue = e.target.value;
        switch(avaliationValue){
            case 'Zap!':

        }
        setAvaliation(avaliationValue);
    }

    const questions = ['O que é JSX?', 'O React é __', 'Componentes devem iniciar com __', 
    'Podemos colocar __ dentro do JSX', 'O ReactDOM nos ajuda __', 'Usamos o npm para __', 
    'Usamos props para __', 'Usamos estado (state) para __'];
    
    
    const answers = ['Uma extensão de linguagem do JavaScript', 'uma biblioteca JavaScript para construção de interfaces', 
    'letra maiúscula', 'expressões', 'interagindo com a DOM para colocar componentes React na mesma', 
        'gerenciar os pacotes necessários e suas dependências', 'passar diferentes informações para componentes ', 
        'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'];
        
    let cardText = [];
    for(let i = 0; i < questions.length; i++){
        cardText.push(`Pergunta ${i+1}`);
    }
    
    const [questionText, setQuestion] = useState(cardText);
    const [avaliation, setAvaliation] = useState('');
    
    return (
        <Fragment>
            {questionText.map((item, index) => 
                <div className='single-card'>
                    <div className='question-text' >{item}</div>
                    <div className='logo-pointer'>
                        <ion-icon onClick={viewQuestion} id={`icon-${index}`} 
                        name="chevron-forward-outline"></ion-icon>
                        <img onClick={viewAnswer} id={`img-${index}`} 
                        className='hidden' src='./images/setinha.png' />
                    </div>
                    <div className='btns hidden'>
                        <div className='single-btn' id={`btn-${index}`}>
                            <input onClick={cardAvaliation} type='button' value='Não lembrei'/></div>
                        <div className='single-btn' id={`btn-${index}`}>
                            <input onClick={cardAvaliation} type='button' value='Quase esqueci'/></div>
                        <div className='single-btn' id={`btn-${index}`}>
                            <input onClick={cardAvaliation} type='button' value='Zap!'/></div>
                    </div>
                </div>
            )}
        </Fragment>    
    );
}
    
export default SingleFlashCard;