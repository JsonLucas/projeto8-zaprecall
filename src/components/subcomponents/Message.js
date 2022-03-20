import party from './../../assets/images/party.png';
import sad from './../../assets/images/sad.png';
import {Fragment} from 'react';
function Message({avaliations, cont, goalZaps}){
    const isForgot = avaliations.filter((item) => {
        if(item === 'Não lembrei'){
            return true;
        }else{ 
            return false;
        }
    });
    const goalZap = avaliations.filter((item) => {
        if(item === 'Zap!'){
            return true;
        }else{
            return false;
        }
    });
    if(cont < 8){
        return (
            <Fragment>
                <div className='concluded'>{cont}/8 concluído</div>
            </Fragment>
        );
    }else{
        document.querySelector('.footer').style.height = '150px';
        document.querySelector('.restart').classList.remove('hidden');
        if((isForgot.length !== 0) && (goalZap.length < goalZaps)){
            return (
                <Fragment>
                    <div className='concluded'>
                        <div className='message-title'><img src={sad}/> <strong>PUTZ!</strong></div>
                        <div className='message'>Ainda faltaram alguns... Mas não desanime!</div>
                    </div>
                </Fragment>
            );
        }else{
            if(isForgot.length === 0){
                return (
                    <Fragment>
                        <div className='concluded'>
                            <div className='message-title'><img src={party}/> <strong>PARABÉNS!</strong></div>
                            <div className='message'>Você não esqueceu de nenhum flashcard!</div>
                        </div>
                    </Fragment>
                );
            }else{
                return (
                    <Fragment>
                        <div className='concluded'>
                            <div className='message-title'><img src={party}/> <strong>PARABÉNS!</strong></div>
                            <div className='message'>Você atingiu sua meta de Zaps!</div>
                        </div>
                    </Fragment>
                );
            }
        }        
    }
}
export default Message;