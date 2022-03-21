import { Fragment } from 'react';
import StartButton from './StartButton';
function GoalZaps({param, btnDisabled}){
    function enableInit(e){
        const btInit = document.querySelector('.start > button');
        if(e.target.value !== ''){
            btInit.classList.remove('disabled');
        }else{
            btInit.classList.add('disabled');
        }
    }
    return (
        <Fragment>
            <div className='goal'>
                <input type='number' className='ipt-goal' onChange={enableInit}
                placeholder='Digite sua meta de zaps...' />
            </div>
            <StartButton param={param} disabled={btnDisabled}/>
        </Fragment>
    );
}

export default GoalZaps;