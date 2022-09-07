import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Operator } from 'src/app/interfaces/operator';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  // esto lo hago asi porque no tengo un login y debo refactorizar
  // todo el proyecto para hacer el flujo como corresponde
  public operator: Operator = {
    id: '',
    username: '',
    password: '',
    name: '',
    lastname: '',
    admin: false
  };

  constructor(private observer: BreakpointObserver, private router: Router, 
    private operatorService: OperatorService) {}
    
  ngOnInit(): void {
    // this.operatorService.getOperators().subscribe((data) => {
    //   this.operator = data[0];
    // });

    this.operatorService.getRandomOperator().subscribe((data) => {
      this.operator = data;
      this.operatorService.saveAdminStatus(JSON.stringify(this.operator.admin));
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  public navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
