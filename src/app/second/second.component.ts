import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  firstNum = 0;
  secondNum = 0;
  output = 0;
  previusPageVal = 0;

  constructor() {}

  ngOnInit() {}

  calculate() {
    // this.output = this.firstNum + this.secondNum;
    let sharedService = new SharedService();
    this.output = sharedService.calculate(this.firstNum, this.secondNum);
    this.previusPageVal = sharedService.firstPageValue;
  }
}
