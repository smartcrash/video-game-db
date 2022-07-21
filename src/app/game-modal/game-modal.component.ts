import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { Subscription } from 'rxjs';
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

  /** Subscription to HttpService */
  private sub?: Subscription

  /** Game details */
  game?: GameDetails

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
    // TODO: Cache result
    if (typeof currentValue === 'number') {
      // Teardown previous subscription if exists
      this.sub?.unsubscribe()


      if (currentValue > -1) {
        this.sub = this.httpService
          .getDetailsOfGame(currentValue)
          .subscribe((game) => this.game = game)
      } else {
        this.game = undefined
      }
    }
  }

  ngAfterViewInit(): void {
    const element = this.modalElement.nativeElement

    this.modal = new Modal(element, {})

    element.addEventListener('hide.bs.modal', () => this.onClose.emit())
  }

  ngOnDestroy(): void {
    this.modal.dispose()
    this.sub?.unsubscribe()
  }
}
