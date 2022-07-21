import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  games?: ReadonlyArray<Game>;
  isOpen = false
  currentGameId: number = -1

  private sub?: Subscription

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.sub = this.httpService
      .getListOfGames()
      .subscribe(({ results }) => this.games = results)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  showGameDetails(id: number) {
    this.currentGameId = id
    this.isOpen = true
  }

  hideGameDetails() {
    this.currentGameId = -1
    this.isOpen = false
  }
}


