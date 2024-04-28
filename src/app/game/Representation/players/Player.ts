import {Team} from "../pieces/Team";
import {ChessPiece} from "../pieces/ChessPiece";

export class Player {

  private team: Team;

  private pieces: Set<ChessPiece>

  private name: String;

  constructor(team: Team, pieces: Set<ChessPiece>, name: String) {
    this.team = team;
    this.pieces = pieces;
    this.name = name;
  }

}
