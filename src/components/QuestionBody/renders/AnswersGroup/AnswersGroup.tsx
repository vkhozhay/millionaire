import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/reduxHooks';
import Answer from '../Answer/Answer';
import { TAnswerVariant } from '../../../../typings/types/Question';
import styles from './styles.module.scss';
import {
  incrementGameProgress,
  setGameScore, setGameState,
} from '../../../../store/reducers/game/gameSlice';
import RouteNames from '../../../../router/typings/enums';
import sleep from '../../../../utils/sleep';
import shuffleArray from '../../../../utils/shuffleArray';
import { alphabet } from './constants';

const AnswersGroup:FC = () => {
  const [variants, setVariants] = useState<TAnswerVariant[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [correct, setCorrect] = useState<string | null>(null);
  const [wrong, setWrong] = useState<string | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const activeQuestion = useAppSelector((state) => state.questions.activeQuestion);
  const gameProgress = useAppSelector((state) => state.game.progress);
  const gameQuestions = useAppSelector((state) => state.questions.gameQuestions);
  const history = useHistory();

  const handleVariantClick = useCallback(async (variant: TAnswerVariant) => {
    if (selected || correct || wrong) {
      return;
    }
    setClicked(true);
    setSelected(variant.id);
    await sleep(1000);
    setSelected(null);
    setCorrect(activeQuestion.answers[0]);
    if (activeQuestion.answers[0] !== variant.id) {
      setWrong(variant.id);
    }
    await sleep(1500);
    setCorrect(null);
    setWrong(null);
    setClicked(false);
    if (variant.id === activeQuestion.answers[0]) {
      if (gameProgress === gameQuestions.length - 1) {
        dispatch(setGameScore({ score: +activeQuestion.price }));
        dispatch(setGameState({ state: 2 }));
        history.push(RouteNames.GAME_OVER);
      }
      dispatch(incrementGameProgress({}));
      dispatch(setGameScore({ score: +activeQuestion.price }));
      return;
    }
    dispatch(setGameState({ state: 2 }));
    history.push(RouteNames.GAME_OVER);
  }, [activeQuestion, selected, correct, wrong]);

  useEffect(() => {
    setVariants(() => shuffleArray<TAnswerVariant>(activeQuestion.variants));
  }, [activeQuestion]);

  return (
    <div className={styles.answersGroup}>
      {
        variants.map((variant, i) => (
          <Answer
            key={variant.id}
            letter={alphabet[i]}
            answer={variant}
            clicked={clicked}
            onClick={handleVariantClick}
            selected={selected === variant.id}
            correct={correct === variant.id}
            wrong={wrong === variant.id}
          />
        ))
      }
    </div>
  );
};

export default AnswersGroup;
