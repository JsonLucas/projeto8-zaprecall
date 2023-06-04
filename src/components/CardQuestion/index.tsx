import './style.scss';
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoMdHelpCircle, IoMdPlay } from 'react-icons/io';
// import { AiOutlineRollback } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { ElementsContextRef } from '../../contexts/elements';
import ReactDOMServer from 'react-dom/server';

interface Props{
	index: number,
	content: string
}

export function CardQuestion({ index, content }: Props) {
	const [open, setOpen] = useState(false);
	const { listIconAnswersRef, cardContentRef, getters, setters } = useContext(ElementsContextRef);
	const revealCard = () => {
		setOpen(true);
		if(cardContentRef){
			const element = cardContentRef.current[index];
			element.classList.add('card-opened');
		}
	}
	const answerCard = ({ target }: any) => {
		if(cardContentRef && listIconAnswersRef){
			const element = cardContentRef.current[index];
			const elementAnswers = listIconAnswersRef.current;
			element.classList.remove('card-opened');
			setters.setContAnswered(getters.contAnswered + 1);
			switch(target.id) {
				case '0':
					element.innerHTML = `<p class="p-answered-0">Pergunta ${index+1}</p>
					${ReactDOMServer.renderToString(<div><IoIosCloseCircle color='#FF3030' size={25} /></div>)}`;
					// eslint-disable-next-line no-case-declarations
					const answerComponentClose = ReactDOMServer.renderToString(
						<div style={{padding: '5px'}}>
							<IoIosCloseCircle color='#FF3030' size={22} />
						</div>
					);
					elementAnswers.innerHTML += `${answerComponentClose}`;
					break;
				case '1':
					element.innerHTML = `<p class="p-answered-1">Pergunta ${index+1}</p>
					${ReactDOMServer.renderToString(<div><IoMdHelpCircle color='#FF922E' size={25} /></div>)}`;
					// eslint-disable-next-line no-case-declarations
					const answerComponentHelp = ReactDOMServer.renderToString( 
						<div style={{padding: '5px'}}>
							<IoMdHelpCircle color='#FF922E' size={22} />
						</div>
					);
					elementAnswers.innerHTML += `${answerComponentHelp}`;
					break;
				case '2':
					setters.setZapAnswers(getters.zapAnswers+1);
					element.innerHTML = `<p class="p-answered-2">Pergunta ${index+1}</p>
					${ReactDOMServer.renderToString(<div><IoIosCheckmarkCircle color='#2FBE34' size={25} /></div>)}`;
					// eslint-disable-next-line no-case-declarations
					const answerComponentCheck = ReactDOMServer.renderToString( 
						<div style={{padding: '5px'}}>
							<IoIosCheckmarkCircle color='#2FBE34' size={22} />
						</div>
					);
					elementAnswers.innerHTML += `${answerComponentCheck}`;
					break;
				default:
					break;
			}
		}
	}
	const assignRef = (element: HTMLDivElement | null) => {
		if(cardContentRef && element){
			cardContentRef.current[index] = element;
		}
	}
	return (
		<div ref={(element) => assignRef(element)} className="card">
			{!open && <>
				<p className="p-label-question">Pergunta {index + 1}</p>
				<div onClick={revealCard}>
					<IoMdPlay size={25} color='black' />
				</div>
			</>}
			{open && <>
				<p className="p-text-question">{content}</p>
				<div className='row-buttons'>
					<button onClick={answerCard} className="button-actions" style={{backgroundColor: '#FF3030'}} id='0'>Não lembrei</button>
					<button onClick={answerCard} className="button-actions" style={{backgroundColor: '#FF922E'}} id='1'>Quase não lembrei</button>
					<button onClick={answerCard} className="button-actions" style={{backgroundColor: '#2FBE34'}} id='2'>Zap!</button>
				</div>
			</>}
		</div>
	);
}