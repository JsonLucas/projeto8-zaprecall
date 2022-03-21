import logo from './../assets/images/logo.png';
import GoalZaps from './subcomponents/GoalZaps';
import SelectDeck from './subcomponents/SelectDeck';
function Initial({setInit, unsetRestart, goalZaps, setGoalZaps, setDeck}){
    function goToSelectDeck(e){
        if(!e.target.classList.contains('disabled')){
            const goalValue = parseInt(document.querySelector('.ipt-goal').value);
            if(goalValue === 0){
                setGoalZaps(1);
            }else{
                setGoalZaps(goalValue);
            }
        }
    }
    function setSelectedDeck(e){
        setDeck(e.target.value);
    }
    if(goalZaps === 0){
        return (
            <section className='section-initial'>
                <div className='start-initial'>
                    <div className='initial-logo'>
                        <img src={logo} />                    
                    </div>
                    <div className='initial-name-logo'>ZapRecall</div>
                </div>
                <div className='init-recall'>
                    <GoalZaps param={goToSelectDeck} btnDisabled={true}/>
                </div>
            </section>
        );
    }else{
        return (
            <section className='section-initial'>
                <div className='start-initial'>
                    <div className='initial-logo'>
                        <img src={logo} />                    
                    </div>
                    <div className='initial-name-logo'>ZapRecall</div>
                </div>
                <div className='init-recall'>
                    <SelectDeck setSelectedDeck={setSelectedDeck} setInit={setInit} 
                    unsetRestart={unsetRestart} btnDisabled={false}/>
                </div>
            </section>
        );
    }
}
export default Initial;