import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import styles from './styles.module.scss';
import Price from './renders/Price';

interface IProps {
  active:boolean;
  onClose:()=>void
}

const ProgressBar:FC<IProps> = ({ active, onClose }) => {
  const gameQuestions = useAppSelector((state) => state.questions.gameQuestions);

  return (
    <div className={classNames(styles.progressBarContainer, active && styles.progressActive)}>
      <div className={styles.header}>
        <div className={styles.closeBtn} role="presentation" onClick={onClose} />
      </div>
      <div className={styles.progressBar}>
        {
          gameQuestions.map((question, i) => (
            <Price
              key={question.id}
              price={question.price}
              currentIndex={i}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProgressBar;
