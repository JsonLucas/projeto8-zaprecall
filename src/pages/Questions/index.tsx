import './style.scss';
import ThunderIcon from '../../assets/thunder-icon.svg';
import { Container } from "../../components/Container";
import { CardQuestion } from '../../components/CardQuestion';
import { Footer } from '../../components/Footer';
import { useContext } from 'react';
import { ElementsContextRef } from '../../contexts/elements';

export function Questions() {
	const { getters } = useContext(ElementsContextRef);
	return (
		<Container>
			<>
				<section className="wrapper">
					<header className="header">
						<div>
							<img src={ThunderIcon} alt='Thunder-Icon' />
						</div>
						<p>ZapRecall</p>
					</header>
					<section className='container-questions'>
						{getters.questions.map((item, index) => <CardQuestion key={`${item}-${index}`} index={index} content={item} />)}
					</section>
				</section>
				<Footer />
			</>
		</Container>
	);
}