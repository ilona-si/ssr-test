import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-componnent',
  templateUrl: './second-componnent.component.html'
})
export class SecondComponnentComponent implements OnInit {
  title = 'angular-tour-of-heroes';
  constructor() { }

  ngOnInit(): void {
  }

}
