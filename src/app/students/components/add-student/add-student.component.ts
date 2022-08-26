import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/interfaces/students';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, OnDestroy {
  public studentsSubscription: Subscription;
  public students: Student[] = [];
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddStudentComponent>, 
    private studentService: StudentService) {
    
    this.studentsSubscription = this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });

    let lastStudent = this.students[this.students.length -1];

    this.form = fb.group({
      id: lastStudent.id + 1,
      name: ['', [Validators.required, Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email]],
      average: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      active: ''
    });
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.studentsSubscription && this.studentsSubscription.unsubscribe();
  }

  public close() {
    this.dialogRef.close();
  }

  public save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
}
