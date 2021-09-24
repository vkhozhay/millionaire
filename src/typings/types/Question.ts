export type TAnswerVariant = {
  id: string;
  value: string;
};

export type TGroupQuestions = {
  price:string;
  questions: TQuestion[];
};

export type TQuestion = {
  id:string;
  price:string;
  question: string;
  multiAnswer: boolean;
  answers: string[];
  variants: TAnswerVariant[]
};
