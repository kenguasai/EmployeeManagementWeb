import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/app.service';

import { Employee } from 'src/app/models/employee.model';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, AfterViewInit {

  columns = [
    { columnDef: 'sno', header: 'S. No.', cell: (element: any) => `${element.sno}` },
    { columnDef: 'employeeId', header: 'Employee Id', cell: (element: any) => `${element.employeeId}` },
    { columnDef: 'employeeName', header: 'Employee Name', cell: (element: any) => `${element.employeeName}` },
    { columnDef: 'phoneNumber', header: 'Phone Number', cell: (element: any) => `${element.phoneNumber}` },
    { columnDef: 'emailId', header: 'Email', cell: (element: any) => `${element.emailId}` },
    { columnDef: 'address', header: 'Address', cell: (element: any) => `${element.address}` },
    { columnDef: 'salary', header: 'Salary', cell: (element: any) => `${element.salary}` }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();

  employees: Employee[] = [
    { sno: 1, employeeId: 'E001', employeeName: 'Deepak', phoneNumber: '9556423810', emailId: 'deepak123@gmail.com', address: 'KPHB Colony, Hyderabad', salary: 30000.00 }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private service: EmployeeService
  ) { }

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.employees);

    // Uncomment below code to fetch from API
    // this.fetchEmployeeDetails();
  }

  fetchEmployeeDetails() {
    this.service.getEmployeeDetails().subscribe(
      result => {
        this.employees = result;
        this.dataSource = new MatTableDataSource(this.employees);
      },
      error => {
        console.log(error);
      }
    );
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

  addEmployee() {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '60%',
      data: new Employee(),
    });

    dialogRef.afterClosed().subscribe(employee => {
      if (employee != null && employee?.employeeId != '') {
        this.employees.push({
          sno: this.employees.length + 1,
          employeeId: employee.employeeId,
          employeeName: employee.employeeName,
          phoneNumber: employee.phoneNumber,
          emailId: employee.emailId,
          address: employee.address,
          salary: employee.salary
        });
        this.dataSource = new MatTableDataSource(this.employees);

        // this.service.addEmployee(employee).subscribe(
        //   result => {
        //     console.log("Added employee successfully");
        //     this.fetchEmployeeDetails();
        //   },
        //   error => {
        //     console.log("Unable to add employee with error: " + error.Message);
        //   }
        // );
      }
    });
  }
}
