import { createSlice } from '@reduxjs/toolkit';
import reducers from './gameReducer';
import TGameState from './typings/types';

const initialState: TGameState = {
  state: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers,
});

const gameReducer = gameSlice.reducer;

export const { setGameState } = gameSlice.actions;
export default gameReducer;
