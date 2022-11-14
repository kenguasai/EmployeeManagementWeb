import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { EmployeeDesignation } from 'src/app/models/employee-designation.model';

@Component({
  selector: 'app-employee-designations',
  templateUrl: './employee-designations.component.html',
  styleUrls: ['./employee-designations.component.css']
})
export class EmployeeDesignationsComponent implements OnInit, AfterViewInit {

  columns = [
    { columnDef: 'sno', header: 'S. No.', cell: (element: any) => `${element.sno}`},
    { columnDef: 'employeeId', header: 'Employee Id', cell: (element: any) => `${element.employeeId}`},
    { columnDef: 'roleName', header: 'Employee Name', cell: (element: any) => `${element.roleName}`},
    { columnDef: 'designationName', header: 'Phone Number', cell: (element: any) => `${element.designationName}`},
    { columnDef: 'departmentName', header: 'Email', cell: (element: any) => `${element.departmentName}`}
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource: MatTableDataSource<EmployeeDesignation> = new MatTableDataSource();

  employeeDesignations: EmployeeDesignation[] = [
    { sno: 1, employeeId: 'E001', roleName: 'Assembly Trainee', designationName: 'Trainee', departmentName: 'Assembly' },
    { sno: 2, employeeId: 'E002', roleName: 'Tester', designationName: 'Manual Tester', departmentName: 'Testing' },
    { sno: 3, employeeId: 'E003', roleName: 'Assembly Trainee', designationName: 'Trainee', departmentName: 'Assembly' },
    { sno: 4, employeeId: 'E004', roleName: 'Tester', designationName: 'Manual Tester', departmentName: 'Testing' },
    { sno: 5, employeeId: 'E005', roleName: 'Assembly Trainee', designationName: 'Trainee', departmentName: 'Assembly' },
    { sno: 6, employeeId: 'E006', roleName: 'Tester', designationName: 'Manual Tester', departmentName: 'Testing' }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.employeeDesignations);
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

  addEmployeeDesignation() {

  }
}
