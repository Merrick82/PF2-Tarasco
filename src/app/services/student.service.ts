import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public studentList: Student[] = [
    { id: 1, name: 'Ramona', lastname: 'Castelani', email: 'rcaste@gmail.com', average: 8, active: true },
    { id: 2, name: 'Hernan', lastname: 'Rodriguez', email: 'herni.rodriguez@gmail.com', average: 6.5, active: true },
    { id: 3, name: 'Lucas', lastname: 'Martinez', email: 'luqui88@yahoo.com', average: 6, active: true },
    { id: 4, name: 'Xiomara', lastname: 'Odiffer', email: 'xiolamaslinda@gmail.com', average: 7, active: false },
    { id: 5, name: 'Scott', lastname: 'Pilgrim', email: 'vstheworld@gmail.com', average: 9, active: true },
    { id: 6, name: 'Jay', lastname: 'Lamotte', email: 'jlamotte@hotmail.com', average: 4, active: false },
    { id: 7, name: 'Gloria', lastname: 'Delgado', email: 'gloriadelcol@gmail.com', average: 6, active: true },
    { id: 8, name: 'Joaquin', lastname: 'Zabina', email: 'joaco@gmail.com', average: 6.5, active: true }
  ];

  constructor() { }

  public getStudents() {
    return new Observable<Student[]>((data) => {
      data.next(this.studentList);
    });
  }

  public deleteStudent(studentId: number) {
    return new Observable<any>((data) => {
      this.studentList = this.studentList.filter((std) => std.id !== studentId);
      data.next(this.studentList);
    });
  }

  public addStudent(newStudent: Student) {
    return new Observable<any>((data) => {
      this.studentList.push(newStudent);
      data.next(this.studentList);
    });
  }

  public editStudent(editedStudent: Student) {
    return new Observable<any>((data) => {
      const std = this.studentList.find(student => student.id === editedStudent.id);

      const index = this.studentList.indexOf(std!);
      this.studentList[index] = editedStudent;

      data.next(this.studentList);
    });
  }
}
