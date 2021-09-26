import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import getGameQuestions from '../../utils/getGameQuestions';
import { setActiveQuestion, setGameQuestions } from '../../store/reducers/questions/questionsSlice';
import QuestionBody from '../../components/QuestionBody/QuestionBody';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './styles.module.scss';

const Game: FC = () => {
  const questions = useAppSelector((state) => state.questions.allQuestions);
  const gameQuestions = useAppSelector((state) => state.questions.gameQuestions);
  const gameState = useAppSelector((state) => state.game.state);
  const gameProgress = useAppSelector((state) => state.game.progress);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gameState !== 1) {
      return;
    }
    const newGameQuestions = getGameQuestions(questions);
    if (newGameQuestions.length > 0) {
      dispatch(setGameQuestions({ gameQuestions: newGameQuestions }));
    }
  }, [gameState]);

  useEffect(() => {
    dispatch(setActiveQuestion({ activeQuestion: gameQuestions[gameProgress] }));
  }, [gameProgress, gameQuestions]);

  return (
    <div className={styles.gameContainer}>
      <QuestionBody />
      <ProgressBar />
    </div>
  );
};

export default Game;
