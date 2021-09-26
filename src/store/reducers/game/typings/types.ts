type TGameState = {
  state: number;
  progress: number;
  score: number | string;
};

export type TState = Pick<TGameState, 'state'>;
export type TProgress = Pick<TGameState, 'progress'>;
export type TSCore = Pick<TGameState, 'score'>;

export default TGameState;
