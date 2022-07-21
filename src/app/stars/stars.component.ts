import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
})
export class StarsComponent implements OnInit {
  @Input() count!: number

  constructor() { }

  ngOnInit(): void {
  }

}
