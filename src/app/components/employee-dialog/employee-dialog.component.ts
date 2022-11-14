import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  employeeForm: FormGroup;
  phoneNumberPattern: RegExp = /^\d{10}$/;
  emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  decimal102Pattern: RegExp = /^\d{1,10}(\.\d{1,2})?$/;

  constructor(
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      employeeId: new FormControl(this.data.employeeId, [Validators.required, Validators.maxLength(50)]),
      employeeName: new FormControl(this.data.employeeName, [Validators.required, Validators.maxLength(60)]),
      phoneNumber: new FormControl(this.data.phoneNumber, [Validators.required, Validators.pattern(this.phoneNumberPattern)]),
      emailId: new FormControl(this.data.emailId, [Validators.required, Validators.maxLength(30), Validators.pattern(this.emailPattern)]),
      address: new FormControl(this.data.address, [Validators.required, Validators.maxLength(100)]),
      salary: new FormControl(this.data.salary, [Validators.required, Validators.pattern(this.decimal102Pattern)])
    });
  }

  saveEmployee() {
    this.data = this.employeeForm.getRawValue();
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close(null);
  }

}
