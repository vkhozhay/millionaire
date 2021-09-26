import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import GameActions from './typings/enums';
import TGameState, { TSCore, TState } from './typings/types';

const reducers: SliceCaseReducers<TGameState> = {
  [GameActions.SET_GAME_STATE]: (state: TGameState, action: PayloadAction<TState>) => ({
    ...state,
    state: action.payload.state,
  }),
  [GameActions.INCREMENT_PROGRESS]: (state:TGameState) => ({
    ...state,
    progress: state.progress + 1,
  }),
  [GameActions.SET_SCORE]: (state: TGameState, action: PayloadAction<TSCore>) => ({
    ...state,
    score: action.payload.score,
  }),
  [GameActions.RESET_GAME]: (state:TGameState) => ({
    ...state,
    progress: 0,
    score: 0,
  }),
};

export default reducers;
