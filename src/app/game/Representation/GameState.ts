import {Board} from "./chess-board/Board";
import {Player} from "./players/Player";

export interface GameState {
  board: Board;
  player1: Player;
  player2: Player
}
