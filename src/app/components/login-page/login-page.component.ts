import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { EmployeeService } from 'src/app/app.service';
import { map, catchError } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User = new User();
  hasLoginError: boolean = false;
  errorMessage: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.hasLoginError = false;
    this.employeeService.getUsers().subscribe(result => {
    this.router.navigateByUrl('/home');
    }, error => {
    this.hasLoginError = true;
    if (error.statusCode == 404) {
       this.errorMessage = 'Unable to find the Login credentials. Please try again with correct credentials';
       }
    else {
       console.log(error);
       this.errorMessage = 'Error occured when trying to Login user. Please try again';

        }
      });
  }

  login() {    
    this.router.navigateByUrl('/home');
     this.employeeService.login(this.user).subscribe(result => {
       this.router.navigateByUrl('/home');
     }, error => {
       this.hasLoginError = true;
       if (error.statusCode == 404) {
         this.errorMessage = 'Unable to find the Login credentials. Please try again with correct credentials';
       }
       else {
         this.errorMessage = 'Error occured when trying to Login user. Please try again';

       }
     });
  }

}
