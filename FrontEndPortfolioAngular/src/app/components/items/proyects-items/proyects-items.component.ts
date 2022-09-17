import { Component, OnInit } from '@angular/core';
import {Portfolio} from 'src/app/Portfolio';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-proyects-items',
  templateUrl: './proyects-items.component.html',
  styleUrls: ['./proyects-items.component.css']
})
export class ProyectsItemsComponent implements OnInit {
  proyectos: Array<Portfolio["proyects"]> = [];
  
  constructor( private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data=>{
      console.log(data.proyects);
      this.proyectos=data.proyects;

  });
  }

}