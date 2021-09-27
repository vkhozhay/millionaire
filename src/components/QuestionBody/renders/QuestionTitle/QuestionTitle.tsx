import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  value: string
}

const QuestionTitle:FC<IProps> = ({ value }) => (
  <div className={styles.questionTitleContainer}>
    <h2 className={styles.questionTitle}>{value}</h2>
  </div>
);

export default QuestionTitle;
