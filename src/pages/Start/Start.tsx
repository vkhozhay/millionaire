import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import RouteNames from '../../router/typings/enums';
import { setGameState } from '../../store/reducers/game/gameSlice';
import { useAppDispatch } from '../../utils/hooks/reduxHooks';
import styles from './styles.module.scss';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const Start:FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleStartClick = useCallback(() => {
    dispatch(setGameState({ state: 1 }));
    history.push(RouteNames.GAME);
  }, []);

  return (
    <div className={styles.startPage}>
      <PageTemplate actionName="Start" actionHandler={handleStartClick}>
        <h1 className={styles.startTitle}>Who wants to be a millionaire?</h1>
      </PageTemplate>
    </div>
  );
};

export default Start;
