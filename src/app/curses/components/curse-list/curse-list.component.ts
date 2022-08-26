import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Curse } from 'src/app/interfaces/curses';
import { CurseService } from 'src/app/services/curse.service';
import { AddCurseComponent } from '../add-curse/add-curse.component';
import { EditCurseComponent } from '../edit-curse/edit-curse.component';

@Component({
  selector: 'app-curse-list',
  templateUrl: './curse-list.component.html',
  styleUrls: ['./curse-list.component.css']
})
export class CurseListComponent implements OnInit, OnDestroy {
  public columns: string[] = ['curso', 'profesor', 'activo', 'acciones'];
  public curses: Curse[] = [];
  public cursesSubscription: Subscription;
  public cursesDeleteSubscription!: Subscription;
  public cursesAddSubscription!: Subscription;
  public cursesEditSubscription!: Subscription;
  
  @ViewChild(MatTable) table!: MatTable<Curse>;
  constructor(private dialog: MatDialog, private curseService: CurseService) { 
    this.cursesSubscription = this.curseService.getCurses().subscribe((data) => {
      this.curses = data;
    }); 
  }
  ngOnDestroy(): void {
    this.cursesSubscription && this.cursesSubscription.unsubscribe();
    this.cursesDeleteSubscription && this.cursesDeleteSubscription.unsubscribe();
    this.cursesAddSubscription && this.cursesAddSubscription.unsubscribe();
    this.cursesEditSubscription && this.cursesEditSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  public addCurse() {
    const dialogRef = this.dialog.open(AddCurseComponent, {
      width: '500px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.cursesAddSubscription = this.curseService.addCurse(res).subscribe((data) => {
          this.curses = data;
        });
        
        this.table.renderRows();
      }
    });
  }
  
  public editCurse(curse: Curse) {
    const dialogRef = this.dialog.open(EditCurseComponent, {
      width: '500px',
      height: '350px',
      data: curse
    });
    
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.cursesEditSubscription = this.curseService.editCurse(res).subscribe((data) => {
          this.curses = data;
        });
        
        this.table.renderRows();
      }
    });
  }
  
  public deleteCurse(curse: Curse) {
    this.cursesDeleteSubscription = this.curseService.deleteCurse(curse.id).subscribe((data) => {
      this.curses = data;
    });
  }
}
