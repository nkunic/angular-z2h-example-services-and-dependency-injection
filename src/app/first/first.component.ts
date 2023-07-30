import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

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

  calculate() {
    //  this.output = this.firstNum + this.secondNum;
    let sharedService = new SharedService();
    this.output = sharedService.calculate(this.firstNum, this.secondNum);
    sharedService.firstPageValue = this.output;
  }
}
