import {Board} from "../Representation/chess-board/Board";
import {Player} from "../Representation/players/Player";

export class GameController {

  private readonly _gameState: Board;

  private playerOne: Player;

  private playerTwo: Player;

  constructor(gameState: Board = new Board(), playerOne: Player, playerTwo: Player) {
    this._gameState = gameState;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  get gameState(): Board {
    return this._gameState;
  }
}
