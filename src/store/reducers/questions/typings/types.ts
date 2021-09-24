import { TGroupQuestions, TQuestion } from '../../../../typings/types/Question';

type TQuestionsState = {
  activeQuestion: TQuestion,
  gameQuestions: TQuestion[],
  allQuestions: TGroupQuestions[]
};

export type TActiveQuestion = Pick<TQuestionsState, 'activeQuestion'>;
export type TGameQuestions = Pick<TQuestionsState, 'gameQuestions'>;
export type TAllQuestions = Pick<TQuestionsState, 'allQuestions'>;

export default TQuestionsState;
