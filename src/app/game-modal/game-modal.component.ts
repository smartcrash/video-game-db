import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameDetailsWithScreenhotsAndMovies } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
})
export class GameModalComponent implements OnInit, OnChanges, OnDestroy {
  /** Current displayed game's ID */
  @Input() id: number = -1

  @Input() isOpen = false
  @Output() onClose = new EventEmitter<void>()

  /** Game details */
  game?: GameDetailsWithScreenhotsAndMovies
  detailsOfGameSub?: Subscription

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

  ngOnDestroy(): void {
    this.detailsOfGameSub?.unsubscribe()
  }

  private getDetailsOfGame(id: number) {
    this.detailsOfGameSub = this.httpService
      .getDetailsOfGame(id)
      .subscribe(game => this.game = game)
  }
}
