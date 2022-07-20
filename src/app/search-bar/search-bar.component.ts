import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>
  inputValue = ''

  constructor(private router: Router, private route: ActivatedRoute) { }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === '/') {
      event.preventDefault()
      event.stopPropagation()

      this.inputElement.nativeElement.focus()
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.inputValue = params['search'] || "")
  }

  onSubmit(): void {
    const value = this.inputValue.trim()

    if (value) this.router.navigate(['/', value])
  }
}
