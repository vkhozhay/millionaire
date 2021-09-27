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

type TAvailableVariants = {
  selected:string | null;
  correct: string | null;
  wrong:string | null;
};

const defaultAvailableVariants: TAvailableVariants = {
  selected: null,
  correct: null,
  wrong: null,
};

const AnswersGroup:FC = () => {
  const [variants, setVariants] = useState<TAnswerVariant[]>([]);

  const [availableVariants, setAvailableVariants] = useState({ ...defaultAvailableVariants });
  const { selected, correct, wrong } = availableVariants;

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
    const correctAnswer:string = activeQuestion.answers[0];
    setClicked(true);
    setAvailableVariants((prev) => ({ ...prev, selected: variant.id }));
    await sleep(1000);
    setAvailableVariants((prev) => ({
      ...prev,
      selected: null,
      correct: correctAnswer,
    }));
    if (activeQuestion.answers[0] !== variant.id) {
      setAvailableVariants((prev) => ({ ...prev, wrong: variant.id }));
    }
    await sleep(1500);
    setAvailableVariants({ ...defaultAvailableVariants });
    setClicked(false);
    if (variant.id === correctAnswer) {
      if (gameProgress === gameQuestions.length - 1) {
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
