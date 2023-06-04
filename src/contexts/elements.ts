import { createContext, MutableRefObject } from 'react';

interface Context {
	labelConcludedRef: MutableRefObject<HTMLParagraphElement> | null,
	listIconAnswersRef: MutableRefObject<HTMLDivElement> | null,
	cardContentRef: MutableRefObject<Array<HTMLDivElement>> | null,
	getters: {
		contAnswered: number,
		totalAnswers: number,
		questions: Array<string>,
		zapAnswers: number
	},
	setters: {
		setContAnswered: (param: number) => void,
		setZapAnswers: (param: number) => void
	}
}

export const ElementsContextRef = createContext({} as Context);