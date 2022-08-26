import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurseComponent } from './edit-curse.component';

describe('EditCurseComponent', () => {
  let component: EditCurseComponent;
  let fixture: ComponentFixture<EditCurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
