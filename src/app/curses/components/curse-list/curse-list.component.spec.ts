import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurseListComponent } from './curse-list.component';

describe('CurseListComponent', () => {
  let component: CurseListComponent;
  let fixture: ComponentFixture<CurseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
