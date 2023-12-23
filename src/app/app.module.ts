import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPortfolioComponent } from './mon-portfolio/mon-portfolio.component';
import { PageProjetComponent } from './page-projet/page-projet.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPortfolioComponent,
    PageProjetComponent,
    NavComponent,
    PageAccueilComponent,
    PageContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
