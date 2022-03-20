import setinha from './../../assets/images/setinha.png';
function PointerTurnCard({index, viewQuestion, viewAnswer}){
    return (
        <div className='logo-pointer' id={`pointer-${index}`}>
            <ion-icon onClick={viewQuestion} id={`icon-${index}`} 
            name="play-outline"></ion-icon>
            <img onClick={viewAnswer} id={`img-${index}`} 
            className='hidden' src={setinha} />
            <span className='result-avaliation'></span>
        </div>
    );
}

export default PointerTurnCard;