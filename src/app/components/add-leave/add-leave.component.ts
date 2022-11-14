import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Leave } from 'src/app/models/leave.model';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {

  leaveForm: FormGroup;
  numberPattern: RegExp = /^\d{2}$/;

  leaveType: any[] = [{ id: 'Sick Leave', value: 'Sick Leave' }, { id: 'Vacation Leave', value: 'Vacation Leave' }]

  constructor(
    public dialogRef: MatDialogRef<AddLeaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Leave,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.leaveForm = this.fb.group({
      employeeId: new FormControl(this.data.employeeId, [Validators.required, Validators.maxLength(50)]),
      leaveType: new FormControl(this.data.leaveType, [Validators.required]),
      fromDate: new FormControl(this.data.fromDate, [Validators.required]),
      toDate: new FormControl(this.data.toDate, [Validators.required]),
      noOfDays: new FormControl(this.data.noOfDays, [Validators.required, Validators.pattern(this.numberPattern)]),
      reason: new FormControl(this.data.reason, [Validators.required, Validators.maxLength(150)])
    });
  }

  applyLeave() {
    this.data = this.leaveForm.getRawValue();
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close(null);
  }

}
