import { TGroupQuestions, TQuestion } from '../typings/types/Question';
import findRandomIndex from './findRandomIndex';

const getGameQuestions = (questions:TGroupQuestions[]):TQuestion[] => {
  const selectedQuestions:TQuestion[] = questions.reduce((acc, cur) => {
    const questionIndex: number = findRandomIndex(cur.questions.length);
    return [...acc, cur.questions[questionIndex]];
  }, [] as TQuestion[]);

  return selectedQuestions.sort((cur, next) => (+cur.price) - (+next.price));
};

export default getGameQuestions;
