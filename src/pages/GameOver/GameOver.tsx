import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { resetGame, setGameState } from '../../store/reducers/game/gameSlice';
import RouteNames from '../../router/typings/enums';
import styles from './styles.module.scss';
import separateScore from '../../utils/separateScore';

const GameOver:FC = () => {
  const score = useAppSelector((state) => state.game.score);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleStartClick = useCallback(() => {
    dispatch(setGameState({ state: 1 }));
    dispatch(resetGame({}));
    history.push(RouteNames.GAME);
  }, []);

  const resultTitle = `$${separateScore(score)} earned`;

  return (
    <div className={styles.gameOverPage}>
      <PageTemplate actionName="Try again" actionHandler={handleStartClick}>
        <div className={styles.gameOverTitle}>
          <span className={styles.subtitle}>Total score:</span>
          <h2 className={styles.score}>
            {resultTitle}
          </h2>
        </div>
      </PageTemplate>
    </div>
  );
};

export default GameOver;
