import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/404/not_found.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardSuperComponent } from './component/super_admin/dashboard/dashboard_super.component';
import { NewDepartmentComponent } from './component/super_admin/department/new/new_department.component';
import { NewUserSuperComponent } from './component/super_admin/user/new/new_user.component';
import { NewEmployeeComponent } from './component/super_admin/employee/new/new_employee.component';
import { LoginGuards } from './guards/auth/login.guards';
//import { NotLoginGuards } from './guards/auth/not_login.guards';

const routing: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent},
    { path: 'super-admin/dashboard', component: DashboardSuperComponent, canActivate: [LoginGuards] },
    { path: 'super-admin/department/new', component: NewDepartmentComponent },
    { path: 'super-admin/user/new', component: NewUserSuperComponent },
    { path: 'super-admin/employee/new', component: NewEmployeeComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRoute = RouterModule.forRoot(routing);