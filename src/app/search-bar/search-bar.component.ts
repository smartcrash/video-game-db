import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>
  inputValue = ''

  private routeParamsSub?: Subscription

  constructor(private router: Router, private route: ActivatedRoute) { }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === '/') {
      event.preventDefault()
      event.stopPropagation()

      this.inputElement.nativeElement.focus()
      this.inputElement.nativeElement.select()
    }
  }

  ngOnInit(): void {
    this.routeParamsSub = this.route.params.subscribe(params => this.inputValue = params['search'] || "")
  }

  onSubmit(): void {
    const value = this.inputValue.trim()

    this.router.navigate(['/', value])
  }

  ngOnDestroy(): void {
    this.routeParamsSub?.unsubscribe()
  }
}
