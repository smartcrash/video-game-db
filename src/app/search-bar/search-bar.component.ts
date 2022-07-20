import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  inputValue = ''

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.inputValue = params['search'] || "")
  }

  onSubmit(): void {
    const value = this.inputValue.trim()

    if (value) this.router.navigate(['/', value])
  }
}
