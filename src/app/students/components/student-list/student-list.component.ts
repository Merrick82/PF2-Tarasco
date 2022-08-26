import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/interfaces/students';
import { StudentService } from 'src/app/services/student.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  public columns: string[] = ['nombre', 'promedio', 'cursando', 'acciones'];
  public students: Student[] = [];
  public studentsSubscription: Subscription;
  public studentsDeleteSubscription!: Subscription;
  public studentsAddSubscription!: Subscription;
  public studentsEditSubscription!: Subscription;

  @ViewChild(MatTable) table!: MatTable<Student>;
  constructor(private dialog: MatDialog, private studentService: StudentService) { 
      this.studentsSubscription = this.studentService.getStudents().subscribe((data) => {
        this.students = data;
      });
    }
    
  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.studentsSubscription && this.studentsSubscription.unsubscribe();
    this.studentsDeleteSubscription && this.studentsDeleteSubscription.unsubscribe();
    this.studentsAddSubscription && this.studentsAddSubscription.unsubscribe();
    this.studentsEditSubscription && this.studentsEditSubscription.unsubscribe();
  }

  public addStudent() {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '500px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.studentsAddSubscription = this.studentService.addStudent(res).subscribe((data) => {
          this.students = data;
        });
        
        this.table.renderRows();
      }
    });
  }
  
  public editStudent(student: Student) {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: '500px',
      height: '350px',
      data: student
    });
    
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.studentsEditSubscription = this.studentService.editStudent(res).subscribe((data) => {
          this.students = data;
        });
        
        this.table.renderRows();
      }
    });
  }
  
  public deleteStudent(student: Student) {
    this.studentsDeleteSubscription = this.studentService.deleteStudent(student.id).subscribe((data) => {
      this.students = data;
    });
  }
}
