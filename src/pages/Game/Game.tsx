import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import getGameQuestions from '../../utils/getGameQuestions';
import { setActiveQuestion, setGameQuestions } from '../../store/reducers/questions/questionsSlice';
import QuestionBody from '../../components/QuestionBody/QuestionBody';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Game: FC = () => {
  const questions = useAppSelector((state) => state.questions.allQuestions);
  const gameState = useAppSelector((state) => state.game.state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gameState === 1) {
      const gameQuestions = getGameQuestions(questions);
      if (gameQuestions.length < 1) {
        return;
      }
      dispatch(setActiveQuestion({ activeQuestion: gameQuestions[0] }));
      dispatch(setGameQuestions({ gameQuestions }));
    }
  }, [gameState]);

  return (
    <div>
      <QuestionBody />
      <ProgressBar />
    </div>
  );
};

export default Game;
