import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Hexagon from '../../Hexagon/Hexagon';
import separateScore from '../../../utils/separateScore';
import getHexagonVariant from '../utils/getHexagonVariant';
import { useAppSelector } from '../../../utils/hooks/reduxHooks';

interface IProps {
  price:string | number;
  currentIndex:number;
}

const Price:FC<IProps> = ({ price, currentIndex }) => {
  const gameProgress = useAppSelector((state) => state.game.progress);
  const hexagonVariant = getHexagonVariant(gameProgress, currentIndex);
  return (
    <div className={classNames(styles.priceContainer, styles[hexagonVariant])}>
      <div className={styles.price}>
        <Hexagon hovered={false} variant={hexagonVariant}>
          <div className={styles.value}>
            {`$${separateScore(price)}`}
          </div>
        </Hexagon>
      </div>
    </div>
  );
};

export default Price;
