import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import styles from './styles.module.scss';
import Price from './renders/Price';
import MobileHeaderActions from '../MobileHeaderActions/MobileHeaderActions';

interface IProps {
  active:boolean;
  onClose:()=>void
}

const ProgressBar:FC<IProps> = ({ active, onClose }) => {
  const gameQuestions = useAppSelector((state) => state.questions.gameQuestions);

  return (
    <div className={classNames(styles.progressBarContainer, active && styles.progressActive)}>
      <MobileHeaderActions>
        <div className={styles.closeBtn} role="presentation" onClick={onClose} />
      </MobileHeaderActions>
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
