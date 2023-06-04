import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Questions } from './pages/Questions';
import { useRef, useState, useEffect } from 'react';
import { ElementsContextRef } from './contexts/elements';

export default function App() {
  const labelConcludedRef = useRef ({} as HTMLParagraphElement);
  const listIconAnswersRef = useRef({} as HTMLDivElement);
  const cardContentRef = useRef([{}] as Array<HTMLDivElement>);
  const [ contAnswered, setContAnswered ] = useState(0);
  const [ zapAnswers, setZapAnswers ] = useState(0);
  const questions = [
		'texto da pergunta',
		'texto de outra pergunta',
		'texto de mais uma pergunta',
		'texto de pergunta aleatória',
		'texto de mais outra pergunta?'
  ];

  return (
	<ElementsContextRef.Provider value={{ 
		labelConcludedRef, 
		listIconAnswersRef, 
		cardContentRef, 
		getters: { 
			contAnswered, 
			totalAnswers: questions.length,
			questions,
			zapAnswers
		}, 
		setters: { 
			setContAnswered,
			setZapAnswers
		} 
	}}>
		<BrowserRouter>
			<Routes>
				<Route path='/welcome' element={<Welcome />} />
				<Route path='/home' element={<Questions />} />
			</Routes>	
		</BrowserRouter>
	</ElementsContextRef.Provider>
  )
}
