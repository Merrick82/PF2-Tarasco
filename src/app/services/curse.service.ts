import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curse } from '../interfaces/curse';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class CurseService {
  /*public curseList: Curse[] = [
    { id: 1, title: 'Java', professor: 'Ramon Caucele', active: true },
    { id: 2, title: 'Postgres SQL', professor: 'Fiorella Piccolo', active: true },
    { id: 3, title: 'Angular', professor: 'Walter Delgado', active: true },
    { id: 4, title: 'VueJS', professor: 'Laura Alonso', active: true },
    { id: 5, title: 'ReactJS', professor: 'Ezequiel Antelli', active: true },
  ];

  constructor() { }*/
  private api: string = environment.api;

  constructor(private http: HttpClient) { }

  public getCurses(): Observable<Curse[]> {
    return this.http.get<Curse[]>(`${this.api}/curses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })
  }

  public addCurse(curse: Curse) {
    return this.http.post<Curse>(`${this.api}/curses`, curse);
  }

  public editCurse(curse: Curse) {
    return this.http.put<Curse>(`${this.api}/curses/${curse.id}`, curse);
  }

  public deleteCurse(id: string) {
    return this.http.delete<Curse>(`${this.api}/curses/${id}`);
  }

  /*public getCurses() {
    return new Observable<Curse[]>((data) => {
      data.next(this.curseList);
    });
  }

  public deleteCurse(curseId: number) {
    return new Observable<any>((data) => {
      this.curseList = this.curseList.filter((std) => std.id !== curseId);
      data.next(this.curseList);
    });
  }

  public addCurse(newCurse: Curse) {
    return new Observable<any>((data) => {
      this.curseList.push(newCurse);
      data.next(this.curseList);
    });
  }

  public editCurse(editedCurse: Curse) {
    return new Observable<any>((data) => {
      const std = this.curseList.find(curse => curse.id === editedCurse.id);

      const index = this.curseList.indexOf(std!);
      this.curseList[index] = editedCurse;

      data.next(this.curseList);
    });
  }*/
}
