import React, { FC } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import QuestionTitle from './renders/QuestionTitle/QuestionTitle';
import AnswersGroup from './renders/AnswersGroup/AnswersGroup';

interface IProps {
  onOpenProgress:()=>void;
}

const QuestionBody:FC<IProps> = ({ onOpenProgress }) => {
  const activeQuestion = useAppSelector((state) => state.questions.activeQuestion);
  if (!activeQuestion?.id) {
    return null;
  }

  return (
    <div className={styles.questionBody}>
      <div className={styles.header}>
        <div className={styles.openProgressBtn} role="presentation" onClick={onOpenProgress} />
      </div>
      <QuestionTitle value={activeQuestion.question} />
      <AnswersGroup />
    </div>
  );
};

export default QuestionBody;
