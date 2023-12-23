import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageProjetComponent } from "./page-projet/page-projet.component";
import { PageAccueilComponent } from "./page-accueil/page-accueil.component";
import { PageContactComponent } from "./page-contact/page-contact.component";

const routes: Routes = [
    {path: '', component: PageAccueilComponent},
    {path: 'Projets', component: PageProjetComponent},
    {path: 'Contact', component: PageContactComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ] 
})

export class AppRoutingModule {}