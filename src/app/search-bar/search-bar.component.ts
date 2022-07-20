import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // TODO: Set input value to `search` URL param
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)
    const search = data.get('search')?.toString().trim()

    if (search) this.router.navigate(['/', search])
  }
}
