function CardButtons({index, cardAvaliation}){
    return (
        <div className='btns hidden'>
            <div className='single-btn'>
                <button onClick={cardAvaliation} className='btn-forget' id={`forget-${index}`} 
                value='Não lembrei'>Não lembrei</button></div>
            <div className='single-btn'>
                <button onClick={cardAvaliation} className='btn-half' id={`half-${index}`}
                value='Quase esqueci'>Quase esqueci</button></div>
            <div className='single-btn'>
                <button onClick={cardAvaliation} className='btn-zap' id={`zap-${index}`}
                value='Zap!'>Zap!</button></div>
        </div>
    );
}

export default CardButtons;