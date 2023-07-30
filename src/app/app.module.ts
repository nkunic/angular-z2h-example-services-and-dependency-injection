import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { SharedService } from './shared.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FirstComponent, SecondComponent],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
