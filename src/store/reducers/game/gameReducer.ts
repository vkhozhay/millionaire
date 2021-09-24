import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import GameActions from './typings/enums';
import TGameState, { TState } from './typings/types';

const reducers: SliceCaseReducers<TGameState> = {
  [GameActions.SET_GAME_STATE]: (state: TGameState, action: PayloadAction<TState>) => ({
    ...state,
    state: action.payload!.state,
  }),
};

export default reducers;
