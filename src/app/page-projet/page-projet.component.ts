import { Component, OnInit } from '@angular/core';
import { MonPortfolio } from '../modeles/mon-portfolio.modul';
import { MonPortfolioService } from '../services/mon-portfolio.service';

@Component({
  selector: 'app-page-projet',
  templateUrl: './page-projet.component.html',
  styleUrls: ['./page-projet.component.css']
})
export class PageProjetComponent implements OnInit {
  monBlocks: MonPortfolio[] = [];

constructor(private monPortfolioService:MonPortfolioService) {

}

  ngOnInit(): void {
    this.monBlocks = this.monPortfolioService.getAllMonPortfolio();
  }
}
