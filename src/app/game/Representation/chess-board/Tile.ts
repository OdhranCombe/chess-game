import {Colour} from "../../../Common/Colour";
import {ChessPiece} from "../pieces/ChessPiece";

export class Tile {

  private _occupier?: ChessPiece

  constructor(occupier?: ChessPiece) {
    this._occupier = occupier;
  }

  set occupier(value: ChessPiece) {
    this._occupier = value;
  }

  get occupier(): ChessPiece | undefined {
    return this._occupier;
  }
}
