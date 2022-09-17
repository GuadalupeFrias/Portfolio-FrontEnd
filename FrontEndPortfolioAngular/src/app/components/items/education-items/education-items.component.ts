import { Component,  OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import {Portfolio} from 'src/app/Portfolio';
@Component({
  selector: 'app-education-items',
  templateUrl: './education-items.component.html',
  styleUrls: ['./education-items.component.css']
})
export class EducationItemsComponent implements OnInit {
  educations: Array<Portfolio["education"]> = [];
  constructor( private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data=>{
      console.log(data.education);
      this.educations=data.education;

  });
  }

}
