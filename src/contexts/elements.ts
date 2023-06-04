import { createContext } from 'react';

interface Context {
	labelConcludedRef: React.MutableRefObject<HTMLParagraphElement> | null,
	listIconAnswersRef: React.MutableRefObject<HTMLDivElement> | null,
	cardContentRef: React.MutableRefObject<HTMLDivElement> | null,
	getters: {
		contAnswered: number,
		totalAnswers: number
	},
	setters: {
		setContAnswered: (param: number) => void,
		setTotalAnswers: (param: number) => void,
	}
}

export const ElementsContextRef = createContext({} as Context);