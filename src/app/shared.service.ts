import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  firstPageValue = 0;

  constructor() {}

  calculate(firstNumer, secondNumer) {
    return firstNumer + secondNumer;
  }
}
