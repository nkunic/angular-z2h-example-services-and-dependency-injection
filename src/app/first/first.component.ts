import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  firstNum = 0;
  secondNum = 0;
  output = 0;

  constructor() {}

  ngOnInit() {}
}
