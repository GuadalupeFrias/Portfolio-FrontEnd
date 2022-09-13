import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  datosPorfolio:any;
  constructor( private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data=>{
      console.log(data);
      this.datosPorfolio=data;

  });
  }

}
