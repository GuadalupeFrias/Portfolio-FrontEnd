import { Component, OnInit } from '@angular/core';
import {Portfolio} from 'src/app/Portfolio';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html',
  styleUrls: ['./experience-items.component.css']
})
export class ExperienceItemsComponent implements OnInit {

  experiences: Array<Portfolio["experience"]> = [];
  
  constructor( private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data=>{
      console.log(data.experience);
      this.experiences=data.experience;

  });
  }

}
