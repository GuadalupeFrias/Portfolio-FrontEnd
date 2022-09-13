import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Portfolio } from 'src/app/Portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datosPorfolio:any;
  @Input() portfolios: Portfolio[] =[];

 
  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data=>{
      console.log(data);
      this.datosPorfolio=data;

  });
  }

}
