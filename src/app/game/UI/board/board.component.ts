import {Component, OnInit} from '@angular/core';
import {Colour} from "../../../Common/Colour";
import {Board} from "../../Representation/chess-board/Board";
import {GameService} from "../../Services/game.service";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {

  private chessBoard: Board;

  constructor(private gameService: GameService) {
    // this.chessBoard = gameService.getBoard();
  }

  ngOnInit(): void {
  }

}
