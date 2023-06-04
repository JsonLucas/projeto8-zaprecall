import './style.scss';

interface Props{
	children: JSX.Element
}

export function Container({ children }: Props) {
	return (
		<main className="container">
			{ children }
		</main>
	);
}