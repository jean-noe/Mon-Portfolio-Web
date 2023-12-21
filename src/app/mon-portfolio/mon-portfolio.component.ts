import { Component, Input, OnInit} from '@angular/core';
import { MonPortfolio } from '../modeles/mon-portfolio.modul';

@Component({
  selector: 'app-mon-portfolio',
  templateUrl: './mon-portfolio.component.html',
  styleUrls: ['./mon-portfolio.component.css']
})
export class MonPortfolioComponent implements OnInit {
  @Input() monPortfolio : MonPortfolio[] = [];
      
  ngOnInit():void {
    
  }

  getPortfolioClass(portfolio: MonPortfolio): string {
    if (portfolio == this.monPortfolio[0]) {
      return 'l3';
    } else if (portfolio == this.monPortfolio[1]) {
      return 'l2';
    } else if (portfolio == this.monPortfolio[2]) {
      return 'l1';
    } else {
      return ''; // Si aucune classe ne correspond
    }
  }
}
