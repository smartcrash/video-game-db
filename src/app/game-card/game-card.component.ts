import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../models';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
})
export class GameCardComponent implements OnInit {
  /** Current game object */
  @Input() game!: Game;

  /** Is triggered when the card is clicked */
  @Output() onClick = new EventEmitter<Game>()

  ngOnInit(): void {
  }

  handleClick(event: Event) {
    event.preventDefault()

    this.onClick.emit(this.game)
  }
}
