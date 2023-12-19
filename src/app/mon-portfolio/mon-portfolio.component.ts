import { Component, Input, OnInit} from '@angular/core';
import { MonPortfolio } from '../modeles/mon-portfolio.modul';

@Component({
  selector: 'app-mon-portfolio',
  templateUrl: './mon-portfolio.component.html',
  styleUrls: ['./mon-portfolio.component.css']
})
export class MonPortfolioComponent implements OnInit {
  @Input() monPortfolio!: MonPortfolio;
        
  ngOnInit():void {
    
  }
}
