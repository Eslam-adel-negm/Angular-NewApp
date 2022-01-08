import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgyComponent } from './egy/egy.component';
import { UsaComponent } from './usa/usa.component';
import { DetailsComponent } from './details/details.component';
import { DetailsEnComponent } from './details-en/details-en.component';

const routes: Routes = [
  { path: 'egypt', component: EgyComponent },
  { path: 'usa', component: UsaComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'detailsEn/:id', component: DetailsEnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
