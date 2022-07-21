import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameDetailsWithScreenhotsAndMovies } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
})
export class GameModalComponent implements OnInit, OnChanges {
  /** Current displayed game's ID */
  @Input() id: number = -1

  @Input() isOpen = false
  @Output() onClose = new EventEmitter<void>()

  /** Game details */
  game?: GameDetailsWithScreenhotsAndMovies

  /** Stores the result of previously fetched games */
  private cache: Record<number, GameDetailsWithScreenhotsAndMovies> = {}

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { id } = changes
    const { currentValue } = id || {}

    /** Update subcription when `id` changes */
    if (typeof currentValue === 'number') {
      if (currentValue > -1) this.getDetailsOfGame(currentValue)
      else this.game = undefined
    }
  }

  private getDetailsOfGame(id: number) {
    if (!this.cache[id]) {
      const sub = this.httpService
        .getDetailsOfGame(id)
        .subscribe(game => {
          this.cache[id] = game
          this.game = this.cache[id]
          sub.unsubscribe()
        })
    } else this.game = this.cache[id]
  }
}
