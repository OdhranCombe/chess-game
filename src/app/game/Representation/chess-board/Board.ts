import {Tile} from "./Tile";
import {Colour} from "../../../Common/Colour";
import {ChessPiece} from "../pieces/ChessPiece";

export class Board {

  private readonly board:Tile [][];
  private static readonly BOARD_SIZE: number = 8; // chess boards are 8 * 8

  constructor(board?: Board) {
    this.board = []
    let tileNumber = 0;
    for(let row = 0; row < Board.BOARD_SIZE; row++) {
      for(let column = 0; column < Board.BOARD_SIZE; column++, tileNumber++) {
          this.board[row][column] = new Tile();
      }
    }
  }

  public getTile(row: number, column: number): Tile {
    if(row > Board.BOARD_SIZE || row < 0 || column > Board.BOARD_SIZE || column < 0) {
      throw Error("Invalid tile coordinates.")
    }
    // Return deep copy. Don't want to expose game representation
    return JSON.parse(JSON.stringify(this.board[row][column]));
  }

  public setTileOccupier(row: number, column: number, occupier: ChessPiece): void {
    if(row > Board.BOARD_SIZE || row < 0 || column > Board.BOARD_SIZE || column < 0) {
      throw Error("Invalid tile coordinates.")
    }
    this.board[row][column].occupier = occupier;
  }

}
