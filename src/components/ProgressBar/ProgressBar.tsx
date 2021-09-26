import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import styles from './styles.module.scss';
import Hexagon from '../Hexagon/Hexagon';
import separateScore from '../../utils/separateScore';
import getHexagonVariant from "./utils/getHexagonVariant";

const variantsClassNames = {
  active: { variantClass: styles.active },
  disable: { variantClass: styles.disable },
  default: { variantClass: styles.priceContainer },
};

const ProgressBar:FC = () => {
  const gameQuestions = useAppSelector((state) => state.questions.gameQuestions);
  const gameProgress = useAppSelector((state) => state.game.progress);

  return (
    <div className={styles.progressBar}>
      {
            gameQuestions.map((question, i) => {
              const hexagonVariant = getHexagonVariant(gameProgress, i);
              // @ts-ignore
              const { variantClass } = variantsClassNames[hexagonVariant];
              return (
                <div key={question.id} className={classNames(styles.priceContainer, variantClass)}>
                  <div className={styles.price}>
                    <Hexagon hovered={false} variant={hexagonVariant}>
                      <div className={styles.value}>
                        {`$${separateScore(question.price)}`}
                      </div>
                    </Hexagon>
                  </div>
                </div>
              );
            })
        }
    </div>
  );
};

export default ProgressBar;
