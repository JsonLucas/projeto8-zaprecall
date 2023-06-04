import './style.scss';
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoMdHelpCircle } from 'react-icons/io';
import { useContext } from 'react';
import { ElementsContextRef } from '../../contexts/elements';

export function Footer() {
	const { labelConcludedRef, listIconAnswersRef, getters } = useContext(ElementsContextRef);
	const teste = () => {
		if(labelConcludedRef){
			const element = labelConcludedRef.current;
			// element.innerHTML = ``;
		}
	}
	return (
		<footer className='footer'>
			<p ref={labelConcludedRef}>{getters.contAnswered}/{getters.totalAnswers} Concluídos</p>
			<div ref={listIconAnswersRef} className='row-icon-answers'>
				<div style={{padding: '5px'}}>
					<IoIosCheckmarkCircle color='#2FBE34' size={22} />
				</div>
				<div style={{padding: '5px'}}>
					<IoIosCloseCircle color='#FF3030' size={22} />
				</div>
				<div style={{padding: '5px'}}>
					<IoMdHelpCircle color='#FF922E' size={22} />
				</div>
			</div>
		</footer>
	);
}