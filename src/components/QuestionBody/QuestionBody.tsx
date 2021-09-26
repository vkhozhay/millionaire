import React, { FC } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import QuestionTitle from './renders/QuestionTitle/QuestionTitle';
import AnswersGroup from './renders/AnswersGroup/AnswersGroup';

const QuestionBody:FC = () => {
  const activeQuestion = useAppSelector((state) => state.questions.activeQuestion);
  if (!activeQuestion?.id) {
    return null;
  }
  return (
    <div className={styles.questionBody}>
      <QuestionTitle value={activeQuestion.question} />
      <AnswersGroup />
    </div>
  );
};

export default QuestionBody;
