import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  firstNum = 0;
  secondNum = 0;
  output = 0;
  previousPageVal = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  calculate() {
    // this.output = this.firstNum + this.secondNum;
    let sharedService = new SharedService();
    this.output = sharedService.calculate(this.firstNum, this.secondNum);
    this.previousPageVal = sharedService.firstPageValue;
  }

  previous() {
    this.router.navigate(['first']);
  }
}
