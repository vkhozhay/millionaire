import IRoute from './typings/interfaces';
import RouteNames from './typings/enums';
import Start from '../pages/Start';
import Game from '../pages/Game/Game';
import GameOver from '../pages/GameOver';

const routes: IRoute[] = [
  { path: RouteNames.START, component: Start, exact: true },
  { path: RouteNames.GAME, component: Game, exact: true },
  { path: RouteNames.GAME_OVER, component: GameOver, exact: true },
];

export default routes;
