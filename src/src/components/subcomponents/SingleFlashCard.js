import React, { useState, Fragment } from 'react';
import { render } from 'react-dom';
import CardButtons from './CardButtons';
import PointerTurnCard from './PointerTurnCard';
function SingleFlashCard({icon, setIcon, cont, setCont, avaliations, setAvaliation, deck}){
    function viewQuestion(e){
        const id = e.target.id;
        const filterId = parseInt(id[id.length-1]);
        const toShow = [...questionText];
        toShow[filterId] = questions[filterId];
        setQuestion(toShow);
        document.querySelectorAll(`.single-card`)[filterId].classList.add('opened-card');
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
        const resultAvaliation = document.querySelectorAll('.result-avaliation')[id];
        let currentIcon;
        alterQuestionText[id] = cardText[id];
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
        document.querySelectorAll(`.single-card`)[id].classList.remove('opened-card');
        document.querySelectorAll('.btns')[id].classList.add('hidden');
        render(currentIcon, resultAvaliation);
    }

    const {questions, answers} = deck;
    
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
                    <PointerTurnCard index={index} viewQuestion={viewQuestion} 
                    viewAnswer={viewAnswer} />
                    <CardButtons index={index} cardAvaliation={cardAvaliation}/>
                </div>
            )}
        </Fragment>    
    );
}
    
export default SingleFlashCard;