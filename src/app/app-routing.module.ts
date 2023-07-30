import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const myRoutes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full',
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
