import { createAsyncThunk } from '@reduxjs/toolkit';
import { TGroupQuestions } from '../../../typings/types/Question';
import QuestionsActions from './typings/enums';
import QuestionsService from '../../../services/questionsService';

const getAllQuestions = createAsyncThunk<TGroupQuestions[]>(
  QuestionsActions.GET_ALL_QUESTIONS,
  async (): Promise<TGroupQuestions[]> => {
    let questions:TGroupQuestions[] = [];
    try {
      const { data } = await QuestionsService.getQuestions();
      questions = data;
    } catch (e) {
      console.log({ e });
    }
    return questions;
  },
);

export default getAllQuestions;
