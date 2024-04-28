import {Tile} from "../chess-board/Tile";
import {Team} from "./Team";

export abstract class ChessPiece {

  private team: Team;

  protected constructor(team: Team) {
    this.team = team;
  }

  public abstract getValidMoves(): Set<Tile>

}
