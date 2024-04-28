export class Colour {

  private readonly _red: number;
  private readonly _green: number;
  private readonly _blue: number;

  constructor(red: number, blue: number, green: number) {
    this._red = Math.min(Math.max(red, 0), 255);
    this._green = Math.min(Math.max(green, 0), 255);
    this._blue = Math.min(Math.max(blue, 0), 255);
  }

  get red(): number {
    return this._red;
  }

  get green(): number {
    return this._green;
  }

  get blue(): number {
    return this._blue;
  }

}
