import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  games?: ReadonlyArray<Game>;
  isOpen = false
  currentGameId: number = -1

  currentPage = 1
  isPreviousEnabled = false
  isNextEnabled = false

  private listOfGamesSub?: Subscription
  private routeParamsSub?: Subscription

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParamsSub = this.route.queryParams.subscribe((queryParams) => {
      const { q, order } = queryParams
      const page = parseInt(queryParams['page'] || '1')

      this.getListOfGames(q, order, page)
      this.currentPage = page
    });
  }

  ngOnDestroy(): void {
    this.listOfGamesSub?.unsubscribe()
    this.routeParamsSub?.unsubscribe()
  }

  getListOfGames(search: string, ordering: string, page: number) {
    this.listOfGamesSub?.unsubscribe()

    this.listOfGamesSub = this.httpService
      .getListOfGames({ search, ordering, page, pageSize: 12 })
      .subscribe(({ results, next, previous }) => {
        this.games = results
        this.isPreviousEnabled = !!previous
        this.isNextEnabled = !!next
      })
  }

  setPage(value: number) {
    this.currentPage = Math.max(1, value)

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge'
    })
  }

  setPreviousPage(event: Event) {
    event.preventDefault()

    if (this.currentPage > 1 && this.isPreviousEnabled) this.setPage(this.currentPage - 1)
  }

  setNextPage(event: Event) {
    event.preventDefault()

    if (this.isNextEnabled) this.setPage(this.currentPage + 1)
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


