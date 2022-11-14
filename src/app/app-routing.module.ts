import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeDesignationsComponent } from './components/employee-designations/employee-designations.component';
import { LeaveManagementComponent } from './components/leave-management/leave-management.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    data: {
      title: 'Reset Password'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'SignUp'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'employeeDetails',
    component: EmployeeDetailsComponent,
    data: {
      title: 'Employee Details'
    }
  },
  {
    path: 'employeeDesignations',
    component: EmployeeDesignationsComponent,
    data: {
      title: 'Employee Designation Details'
    }
  },
  {
    path: 'leaveManagement',
    component: LeaveManagementComponent,
    data: {
      title: 'Leave Management'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
