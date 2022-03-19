import setinha from './../assets/images/setinha.png';
import { useState, Fragment } from 'react';
function SingleFlashCard({icon, setIcon, cont, setCont, avaliations, setAvaliation}){
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
        const id = parseInt(e.target.id[e.target.id.length - 1]); 
        const alterQuestionText = [...questionText];
        alterQuestionText[id] = cardText[id];
        let currentIcon;
        switch(avaliationValue){
            case 'Zap!':
                currentIcon = <ion-icon name="checkmark-circle"></ion-icon>; 
                document.querySelectorAll('.question-text')[id].classList.add('text-zap');
                break;
            case 'Quase esqueci':
                currentIcon = <ion-icon name="help-circle"></ion-icon>; 
                document.querySelectorAll('.question-text')[id].classList.add('text-half');
                break;
            case 'Não lembrei':
                currentIcon = <ion-icon name="close-circle"></ion-icon>; 
                document.querySelectorAll('.question-text')[id].classList.add('text-forget');
                break;
        }
        setIcon([...icon, currentIcon]);
        setQuestion(alterQuestionText);
        setCont(cont+1);
        setAvaliation([...avaliations, avaliationValue]);
        document.querySelectorAll('.btns')[id].classList.add('hidden');
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

    return (
        <Fragment>
            {questionText.map((item, index) => 
                <div className='single-card'>
                    <div className='question-text'>{item}</div>
                    <div className='logo-pointer' id={`pointer-${index}`}>
                        <ion-icon onClick={viewQuestion} id={`icon-${index}`} 
                        name="play-outline"></ion-icon>
                        <img onClick={viewAnswer} id={`img-${index}`} 
                        className='hidden' src={setinha} />
                        <span className='result-avaliation'>{icon[index]}</span>
                    </div>
                    <div className='btns hidden'>
                        <div className='single-btn'>
                            <input onClick={cardAvaliation} className='btn-forget' id={`forget-${index}`} 
                            type='button' value='Não lembrei'/></div>
                        <div className='single-btn'>
                            <input onClick={cardAvaliation} className='btn-half' id={`half-${index}`}
                            type='button' value='Quase esqueci'/></div>
                        <div className='single-btn'>
                            <input onClick={cardAvaliation} className='btn-zap' id={`zap-${index}`}
                            type='button' value='Zap!'/></div>
                    </div>
                </div>
            )}
        </Fragment>    
    );
}
    
export default SingleFlashCard;