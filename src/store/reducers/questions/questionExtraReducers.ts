import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import TQuestionsState from './typings/types';
import getAllQuestions from './questionsThunks';

const extraReducers = (builder: ActionReducerMapBuilder<TQuestionsState>) => {
  builder
    .addCase(getAllQuestions.pending, (state) => ({
      ...state,
      allQuestions: [],
    }))
    .addCase(getAllQuestions.fulfilled, (state, action) => ({
      ...state,
      allQuestions: action.payload,
    }));
};

export default extraReducers;
