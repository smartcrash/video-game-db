import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { GameDetails } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
})
export class GameModalComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  /** Current displayed game's ID */
  @Input() id: number = -1

  /** Whether or not the modal is visible */
  @Input() isOpen = false

  /** Is triggred when the modal is closed by the user */
  @Output() onClose = new EventEmitter<void>()

  /** Reference to the modal's <div> */
  @ViewChild('modal') private modalElement!: ElementRef<HTMLDivElement>

  /** Holds and instance of Boostrap's Modal */
  private modal!: Modal

  /** Game details */
  game?: GameDetails

  /** Stores the result of previously fetched games */
  private cache: Record<number, GameDetails> = {}

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* This open/closes the boostrap modal when `isOpen` changes */
    if (this.modal) {
      const { isOpen } = changes
      const { currentValue, previousValue } = isOpen

      // Do something if the value actualy changed
      if (currentValue !== previousValue) {
        if (currentValue) this.modal.show()
        else this.modal.hide()
      }
    }


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

  ngAfterViewInit(): void {
    const { nativeElement } = this.modalElement

    this.modal = new Modal(nativeElement, {})

    nativeElement.addEventListener('hide.bs.modal', () => this.onClose.emit())
  }

  ngOnDestroy(): void {
    this.modal.dispose()
  }
}
