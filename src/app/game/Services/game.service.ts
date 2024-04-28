import {Injectable} from '@angular/core';
import {Board} from "../Representation/chess-board/Board";
import {GameController} from "../Engine/GameController";
import {Player} from "../Representation/players/Player";
import {Team} from "../Representation/pieces/Team";
import {ChessPiece} from "../Representation/pieces/ChessPiece";
import {Tile} from "../Representation/chess-board/Tile";
import {Observable} from "rxjs";
import {GameState} from "../Representation/GameState";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameController: GameController;

  constructor() {
    this.gameController = new GameController(new Board(), new Player(Team.WHITE, new Set<ChessPiece>(), "Player1"),
      new Player(Team.BLACK, new Set<ChessPiece>(), "Player12"));
  }

  getObservableGame(): Observable<GameState> {
    return this.gameController.gameState;
  }

  makeMove(piece: ChessPiece, dest: Tile): Observable<Board> {

    throw Error("Not yet implemented")
  }
}
