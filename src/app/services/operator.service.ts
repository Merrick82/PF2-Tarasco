import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Operator } from '../interfaces/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  private api: string = environment.api;

  constructor(private http: HttpClient) { }

  public getOperators(): Observable<Operator[]> {
    return this.http.get<Operator[]>(`${this.api}/operators`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })
  }

  public getRandomOperator(): Observable<Operator> {
    let id: number = this.generateRandomIntegerInRange(1, 7);
    return this.http.get<Operator>(`${this.api}/operators/${id}`);
  }

  private generateRandomIntegerInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public saveAdminStatus(isAdmin: string) {
    localStorage.setItem('_Admin', isAdmin);
  }

  public isAdmin(): boolean {
    return JSON.parse(localStorage.getItem('_Admin')!) === true;
  }
}
