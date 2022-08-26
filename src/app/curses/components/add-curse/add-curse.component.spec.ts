import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurseComponent } from './add-curse.component';

describe('AddCurseComponent', () => {
  let component: AddCurseComponent;
  let fixture: ComponentFixture<AddCurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
