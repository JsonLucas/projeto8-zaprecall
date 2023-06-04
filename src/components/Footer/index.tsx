import './style.scss';
import { useContext, useEffect, useRef } from 'react';
import { ElementsContextRef } from '../../contexts/elements';

export function Footer() {
	const { labelConcludedRef, listIconAnswersRef, getters } = useContext(ElementsContextRef);
	const congratsMessageRef = useRef({} as HTMLDivElement);
	useEffect(() => {
		if(getters.contAnswered === getters.totalAnswers){
			if(congratsMessageRef){
				const element = congratsMessageRef.current;
				if(getters.zapAnswers > Math.floor(getters.totalAnswers/2)) {
					element.innerHTML = `<p class='congrats-row'>Parabéns!</p>
					<p>Você é top! Se saiu muito bem.</p>`;
				} else {
					element.innerHTML = `<p class='congrats-row'>Putz...</p>
					<p>Ainda faltam alguns... Mas não desanime!</p>`;
				}
			}
		}
	}, [getters.contAnswered]);
	return (
		<footer className='footer'>
			<div ref={congratsMessageRef} className="congrats-message"></div>
			<p ref={labelConcludedRef}>{getters.contAnswered}/{getters.totalAnswers} Concluídos</p>
			<div ref={listIconAnswersRef} className='row-icon-answers'></div>
		</footer>
	);
}