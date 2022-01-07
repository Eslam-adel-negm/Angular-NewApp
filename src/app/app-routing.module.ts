import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgyComponent } from './egy/egy.component';
import { UsaComponent } from './usa/usa.component';

const routes: Routes = [
  { path: 'egypt', component: EgyComponent },
  { path: 'usa', component: UsaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
