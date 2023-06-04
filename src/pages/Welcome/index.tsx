import './style.scss';
import ThunderIcon from '../../assets/thunder-icon.svg';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container';

export function Welcome() {
	const navigate = useNavigate();
	return (
		<Container>
			<>
				<div>
					<img src={ThunderIcon} alt='Thunder-Icon' />
				</div>
				<div style={{ marginTop: '20px' }}>
					<p className='welcome-text'>ZapRecall</p>
				</div>
				<div style={{ marginTop: '20px' }}>
					<button className='button-init-recall' onClick={() => navigate('/home')}>Iniciar Recall</button>
				</div>
			</>
		</Container>
	);
}