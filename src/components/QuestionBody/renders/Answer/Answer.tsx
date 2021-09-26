import React, { FC } from 'react';
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
  wrong: boolean
}

const Answer:FC<IProps> = ({
  letter, answer, onClick, selected, correct, wrong,
}) => {
  const variant:string = (selected && HexagonVariants.SELECTED)
      || (correct && HexagonVariants.CORRECT)
      || (wrong && HexagonVariants.WRONG)
      || HexagonVariants.DEFAULT;

  return (
    <div className={styles.answerContainer}>
      <div
        className={styles.answer}
        role="presentation"
        onClick={onClick.bind(null, answer)}
      >
        <Hexagon hovered variant={variant}>
          <div className={styles.value}>
            <span className={styles.valueLetter}>{letter}</span>
            <p>{answer.value}</p>
          </div>
        </Hexagon>
      </div>
    </div>
  );
};

export default Answer;
