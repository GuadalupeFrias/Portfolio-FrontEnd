import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { EducationItemsComponent } from './components/items/education-items/education-items.component';
import { ExperienceItemsComponent } from './components/items/experience-items/experience-items.component';
import { ProyectsItemsComponent } from './components/items/proyects-items/proyects-items.component';
import { SkillsItemsComponent } from './components/items/skills-items/skills-items.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationItemsComponent,
    ExperienceItemsComponent,
    ProyectsItemsComponent,
    SkillsItemsComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      percent:85,
      titleColor:"#7a65b3",
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
