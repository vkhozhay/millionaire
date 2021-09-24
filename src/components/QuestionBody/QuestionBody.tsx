import React, { FC } from 'react';
import { useAppSelector } from '../../utils/hooks/reduxHooks';

const QuestionBody:FC = () => {
  const activeQuestion = useAppSelector((state) => state.questions.activeQuestion);
  if (!activeQuestion.id) {
    return null;
  }
  return (
    <div>
      {activeQuestion?.question}
      {activeQuestion?.variants.map((a) => <span key={a.id}>{a.value}</span>)}
    </div>
  );
};

export default QuestionBody;
