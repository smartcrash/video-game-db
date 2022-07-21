import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  /** Whether or not the modal is visible */
  @Input() isOpen = false

  /** Is triggred when the modal is closed by the user */
  @Output() onClose = new EventEmitter<void>()

  /** Reference to the modal's <div> */
  @ViewChild('modal') private elementRef!: ElementRef<HTMLDivElement>

  /** Holds and instance of Boostrap's Modal */
  private bModal!: Modal

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* This open/closes the boostrap modal when `isOpen` changes */
    if (this.bModal) {
      const { isOpen } = changes
      const { currentValue, previousValue } = isOpen

      // Do something if the value actualy changed
      if (currentValue !== previousValue) {
        if (currentValue) this.bModal.show()
        else this.bModal.hide()
      }
    }
  }

  ngAfterViewInit(): void {
    const { nativeElement } = this.elementRef

    this.bModal = new Modal(nativeElement, {})

    nativeElement.addEventListener('hide.bs.modal', () => this.onClose.emit())
  }

  ngOnDestroy(): void {
    this.bModal.dispose()
  }
}
