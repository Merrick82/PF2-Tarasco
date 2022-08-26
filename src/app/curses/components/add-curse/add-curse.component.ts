import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Curse } from 'src/app/interfaces/curses';
import { CurseService } from 'src/app/services/curse.service';

@Component({
  selector: 'app-add-curse',
  templateUrl: './add-curse.component.html',
  styleUrls: ['./add-curse.component.css']
})
export class AddCurseComponent implements OnInit, OnDestroy {
  public cursesSubscription: Subscription;
  public curses: Curse[] = [];
  public form!: FormGroup;
  
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddCurseComponent>, 
    private curseService: CurseService) {
    
    this.cursesSubscription = this.curseService.getCurses().subscribe((data) => {
      this.curses = data;
    });

    let lastCurse = this.curses[this.curses.length -1];

    this.form = fb.group({
      id: lastCurse.id + 1,
      title: ['', [Validators.required, Validators.maxLength(25)]],
      professor: ['', [Validators.required, Validators.maxLength(40)]],
      active: ''
    }); 
  }

  ngOnDestroy(): void {
    this.cursesSubscription && this.cursesSubscription.unsubscribe();
  }

  ngOnInit(): void {
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
