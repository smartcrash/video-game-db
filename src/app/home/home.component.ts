import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private listOfGamesSub?: Subscription
  private routeParamsSub?: Subscription

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParamsSub = this.activatedRoute.params.subscribe((params) => {
      this.getListOfGames(params['search'] || '')
    });
  }

  ngOnDestroy(): void {
    this.listOfGamesSub?.unsubscribe()
    this.routeParamsSub?.unsubscribe()
  }

  getListOfGames(search: string) {
    this.listOfGamesSub?.unsubscribe()

    this.listOfGamesSub = this.httpService
      .getListOfGames({ search })
      .subscribe(({ results }) => this.games = results)
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


