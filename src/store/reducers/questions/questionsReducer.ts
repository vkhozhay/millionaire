import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import QuestionsActions from './typings/enums';
import TQuestionsState, { TActiveQuestion, TGameQuestions } from './typings/types';

const reducers: SliceCaseReducers<TQuestionsState> = {
  [QuestionsActions.SET_ACTIVE_QUESTION]:
      (state: TQuestionsState, action: PayloadAction<TActiveQuestion>) => ({
        ...state,
        activeQuestion: action.payload.activeQuestion,
      }),
  [QuestionsActions.SET_GAME_QUESTIONS]:
      (state: TQuestionsState, action: PayloadAction<TGameQuestions>) => ({
        ...state,
        gameQuestions: action.payload.gameQuestions,
      }),
};

export default reducers;
