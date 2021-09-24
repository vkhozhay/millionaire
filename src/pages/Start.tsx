import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import RouteNames from '../router/typings/enums';
import { setGameState } from '../store/reducers/game/gameSlice';
import { useAppDispatch } from '../utils/hooks/reduxHooks';

const Start:FC = () => {
  const router = useHistory();
  const dispatch = useAppDispatch();
  const handleStartClick = () => {
    dispatch(setGameState({ state: 1 }));
    router.push(RouteNames.GAME);
  };
  return (
    <div>
      Start page
      <button type="button" onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default Start;
