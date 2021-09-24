import axios, { AxiosResponse } from 'axios';
import { TGroupQuestions } from '../typings/types/Question';

class QuestionsService {
  static async getQuestions():Promise<AxiosResponse<TGroupQuestions[]>> {
    return axios.get<TGroupQuestions[]>('./questions.json');
  }
}

export default QuestionsService;
