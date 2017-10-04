import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/404/not_found.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardSuperComponent } from './component/super_admin/dashboard/dashboard_super.component';
import { NewDepartmentComponent } from './component/super_admin/department/new/new_department.component';
import { NewUserSuperComponent } from './component/super_admin/user/new/new_user.component';
import { NewEmployeeComponent } from './component/super_admin/employee/new/new_employee.component';
import { LoginGuards } from './guards/auth/login.guards';
import { SuperAdmin } from './guards/auth/super_admin.guards';
import { ListUserSuperComponent } from './component/super_admin/user/list/list_user.component';
import { DetailUserComponent } from './component/super_admin/user/list/detail/detail_user.component';
import { EditUserComponent } from './component/super_admin/user/list/edit/edit_user.component';
//import { NotLoginGuards } from './guards/auth/not_login.guards';
import { TextSuperComponent } from './component/super_admin/text/text.component';

const routing: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'super-admin/dashboard', component: DashboardSuperComponent, canActivate: [LoginGuards] },
    { path: 'super-admin/dashboard', component: DashboardSuperComponent, canActivate: [SuperAdmin] },
    { path: 'super-admin/user/list', component: ListUserSuperComponent, canActivate: [SuperAdmin] },
    { path: 'super-admin/user/new', component: NewUserSuperComponent, canActivate: [SuperAdmin] },
    { path: 'super-admin/user/:id', component: DetailUserComponent, canActivate: [SuperAdmin] },
    
    { path: 'super-admin/user/edit/:id', component: EditUserComponent, canActivate: [SuperAdmin] },
    { path: 'super-admin/department/new', component: NewDepartmentComponent, canActivate: [SuperAdmin] },

    { path: 'super-admin/employee/new', component: NewEmployeeComponent, canActivate: [SuperAdmin] },
    { path: 'super-admin/text', component: TextSuperComponent, canActivate: [SuperAdmin] },
    { path: '**', component: NotFoundComponent }
];

export const AppRoute = RouterModule.forRoot(routing);