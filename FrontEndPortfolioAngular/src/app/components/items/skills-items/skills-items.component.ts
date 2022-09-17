import { Component, OnInit } from '@angular/core';
import {Portfolio} from 'src/app/Portfolio';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-skills-items',
  templateUrl: './skills-items.component.html',
  styleUrls: ['./skills-items.component.css']
})
export class SkillsItemsComponent implements OnInit {
  Skills: Array<Portfolio["skills"]> = [];
  
  constructor( private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data=>{
      console.log(data.skills);
      this.Skills=data.skills;

  });
  }

}