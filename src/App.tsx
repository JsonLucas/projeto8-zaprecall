import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Questions } from './pages/Questions';
import { useRef, useState } from 'react';
import { ElementsContextRef } from './contexts/elements';

export default function App() {
  const labelConcludedRef = useRef ({} as HTMLParagraphElement);
  const listIconAnswersRef = useRef({} as HTMLDivElement);
  const cardContentRef = useRef({} as HTMLDivElement);
  const [ contAnswered, setContAnswered ] = useState(0);
  const [ totalAnswers, setTotalAnswers ] = useState(0);

  return (
	<ElementsContextRef.Provider value={{ 
		labelConcludedRef, 
		listIconAnswersRef, 
		cardContentRef, 
		getters: { 
			contAnswered, 
			totalAnswers 
		}, 
		setters: { 
			setContAnswered, 
			setTotalAnswers 
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
