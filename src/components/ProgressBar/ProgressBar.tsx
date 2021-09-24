import React, { FC } from 'react';
import { useAppSelector } from '../../utils/hooks/reduxHooks';

const ProgressBar:FC = () => {
  const gameQuestions = useAppSelector((state) => state.questions.gameQuestions);

  return (
    <div>
      {
            gameQuestions.map((question) => <span key={question.id}>{question.price}</span>)
        }
    </div>
  );
};

export default ProgressBar;
