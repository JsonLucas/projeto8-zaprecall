import './style.scss';
import ThunderIcon from '../../assets/thunder-icon.svg';
import { Container } from "../../components/Container";
import { CardQuestion } from '../../components/CardQuestion';
import { Footer } from '../../components/Footer';

export function Questions() {
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
						<CardQuestion index={0} />
						<CardQuestion index={1} />
						<CardQuestion index={2} />
						<CardQuestion index={3} />
					</section>
				</section>
				<Footer />
			</>
		</Container>
	);
}