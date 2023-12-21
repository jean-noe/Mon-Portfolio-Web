import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPortfolioComponent } from './mon-portfolio/mon-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
