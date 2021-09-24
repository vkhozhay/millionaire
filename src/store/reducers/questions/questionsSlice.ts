import { createSlice } from '@reduxjs/toolkit';
import reducers from './questionsReducer';
import extraReducers from './questionExtraReducers';
import { TQuestion } from '../../../typings/types/Question';
import TQuestionsState from './typings/types';

const initialState: TQuestionsState = {
  activeQuestion: {} as TQuestion,
  gameQuestions: [],
  allQuestions: [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers,
  extraReducers,
});

const questionsReducer = questionsSlice.reducer;

export const { setActiveQuestion, setGameQuestions } = questionsSlice.actions;
export default questionsReducer;
