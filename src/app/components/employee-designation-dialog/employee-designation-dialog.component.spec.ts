import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDesignationDialogComponent } from './employee-designation-dialog.component';

describe('EmployeeDesignationDialogComponent', () => {
  let component: EmployeeDesignationDialogComponent;
  let fixture: ComponentFixture<EmployeeDesignationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDesignationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDesignationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
