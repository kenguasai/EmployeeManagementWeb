import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Leave } from 'src/app/models/leave.model';
import { AddLeaveComponent } from '../add-leave/add-leave.component';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit, AfterViewInit {

  columns = [
    { columnDef: 'sno', header: 'S. No.', cell: (element: Leave) => `${element.sno}`},
    { columnDef: 'employeeId', header: 'Employee Id', cell: (element: Leave) => `${element.employeeId}`},
    { columnDef: 'leaveType', header: 'Leave Type', cell: (element: Leave) => `${element.leaveType}`},
    { columnDef: 'fromDate', header: 'From Date', cell: (element: Leave) => `${element.fromDate.toDateString()}`},
    { columnDef: 'toDate', header: 'To Date', cell: (element: Leave) => `${element.toDate.toDateString()}`},
    { columnDef: 'noOfDays', header: 'Number of Days', cell: (element: Leave) => `${element.noOfDays}`},
    { columnDef: 'reason', header: 'Reason', cell: (element: Leave) => `${element.reason}`}
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource: MatTableDataSource<Leave> = new MatTableDataSource();

  leaveDetails: Leave[] = [
    { sno: 1, employeeId: 'E001', leaveType: 'Sick Leave', fromDate: new Date('2022/10/03'), toDate: new Date('2022/10/05'), noOfDays: 3, reason: 'Health Issue' },
    { sno: 2, employeeId: 'E002', leaveType: 'Vacation Leave', fromDate: new Date('2022/10/01'), toDate: new Date('2022/10/05'), noOfDays: 5, reason: 'Personal reasons' }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.leaveDetails);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyLeave() {
    const dialogRef = this.dialog.open(AddLeaveComponent, {
      width: '60%',
      data: new Leave(),
    });

    dialogRef.afterClosed().subscribe(leave => {
      if (leave != null && leave?.employeeId != '') {
        this.leaveDetails.push({
          sno: this.leaveDetails.length + 1,
          employeeId: leave.employeeId,
          leaveType: leave.leaveType,
          fromDate: leave.fromDate,
          toDate: leave.toDate,
          noOfDays: leave.noOfDays,
          reason: leave.reason
        });
        this.dataSource = new MatTableDataSource(this.leaveDetails);
      }
    });
  }

}
