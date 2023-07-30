import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  firstPageValue = 0;

  constructor() {}

  calculate(firstNum, secondNum) {
    return firstNum + secondNum;
  }
}
