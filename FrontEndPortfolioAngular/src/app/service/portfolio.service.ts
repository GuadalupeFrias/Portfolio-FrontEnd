import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Portfolio} from 'src/app/Portfolio'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
   })
}
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl=' http://localhost:5000/Portfolio'

  constructor( private http:HttpClient) { }

    getPortfolioData(): Observable<any>{
      return this.http.get('./assets/data/data.json')
      }
  }

