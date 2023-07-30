import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  firstNum = 0;
  secondNum = 0;
  output = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  calculate() {
    // this.output = this.firstNum + this.secondNum;
    let sharedService = new SharedService();
    this.output = sharedService.calculate(this.firstNum, this.secondNum);
    sharedService.firstPageValue = this.output;
  }

  next() {
    this.router.navigate(['second']);
  }
}
