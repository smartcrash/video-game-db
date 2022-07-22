import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ordering-select',
  templateUrl: './ordering-select.component.html',
})
export class OrderingSelectComponent implements OnInit, OnDestroy {
  selectedValue = ''

  private routeQueryParamsSub?: Subscription

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeQueryParamsSub = this.route
      .queryParams
      .subscribe(queryParams => this.selectedValue = queryParams['order'] || "")
  }

  onChange() {
    const order = this.selectedValue || undefined

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { order },
      queryParamsHandling: 'merge'
    })
  }

  ngOnDestroy(): void {
    this.routeQueryParamsSub?.unsubscribe()
  }
}
