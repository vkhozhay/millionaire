import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { TAnswerVariant } from '../../../../typings/types/Question';
import styles from './styles.module.scss';
import Hexagon from '../../../Hexagon/Hexagon';
import { HexagonVariants } from '../../../Hexagon/typings/enums';

interface IProps {
  letter:string;
  answer: TAnswerVariant;
  onClick: (answer:TAnswerVariant)=>void;
  selected: boolean;
  correct:boolean;
  wrong: boolean;
  clicked: boolean;
}

const Answer:FC<IProps> = ({
  letter, answer, onClick, selected, correct, wrong, clicked,
}) => {
  const variant:string = (selected && HexagonVariants.SELECTED)
      || (correct && HexagonVariants.CORRECT)
      || (wrong && HexagonVariants.WRONG)
      || HexagonVariants.DEFAULT;

  return (
    <div className={classNames(styles.answerContainer, styles[variant])}>
      <div
        className={styles.answer}
        role="presentation"
        onClick={onClick.bind(null, answer)}
      >
        <Hexagon hovered={!clicked} variant={variant}>
          <div className={styles.value}>
            <span className={styles.valueLetter}>{letter}</span>
            <p className={styles.valueText}>{answer.value}</p>
          </div>
        </Hexagon>
      </div>
    </div>
  );
};

export default Answer;
