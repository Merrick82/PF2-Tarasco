import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  public cards: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cards = [
      { id: 1, title: 'Alumnos', path: 'students/list' },
      { id: 2, title: 'Cursos', path: 'curses/list' },
      { id: 3, title: 'Inscripciones', path: 'construct' }
    ];
  }

  public navigateTo(path: String) {
    this.router.navigate([`/${path}`]);
  }
}
