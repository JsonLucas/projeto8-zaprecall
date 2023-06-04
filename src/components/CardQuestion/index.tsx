import './style.scss';
import { IoMdPlay } from 'react-icons/io';
import { AiOutlineRollback } from 'react-icons/ai';
import { useContext } from 'react';
import { ElementsContextRef } from '../../contexts/elements';

interface Props{
	index: number
}

export function CardQuestion({ index }: Props) {
	const { cardContentRef } = useContext(ElementsContextRef)
	const revealCard = () => {
		const answerCard = () => {
			if(cardContentRef){
				console.log('teste');
				const element = cardContentRef.current;
				element.classList.remove('card-opened');
				element.innerHTML = `<p class="p-label-question">Pergunta 1</p>`;
			}
		}
		if(cardContentRef){
			const element = cardContentRef.current;
			element.classList.add('card-opened');
			element.innerHTML = `
				<p class="p-text-question">teste</p>
				<div class='row-buttons'>
					<button onclick="answerCard();" class="button-actions" style="background-color: #FF3030">Não lembrei</button>
					<button onclick="answerCard();" class="button-actions" style="background-color: #FF922E">Quase não lembrei</button>
					<button onclick="answerCard();" class="button-actions" style="background-color: #2FBE34">Zap!</button>
				</div>
			`;
		}
	}
	return (
		<div ref={cardContentRef} className="card">
			<p className="p-label-question">Pergunta 1</p>
			<div onClick={revealCard}>
				<IoMdPlay size={25} color='black' />
			</div>
		</div>
	);
}