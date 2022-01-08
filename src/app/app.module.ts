import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgyComponent } from './egy/egy.component';
import { UsaComponent } from './usa/usa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { DetailsEnComponent } from './details-en/details-en.component';

@NgModule({
  declarations: [
    AppComponent,
    EgyComponent,
    UsaComponent,
    NavbarComponent,
    DetailsComponent,
    DetailsEnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
