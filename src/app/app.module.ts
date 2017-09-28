import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoute } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/404/not_found.component';
/* Super Admin */
import { SidebarSuperComponent } from './component/super_admin/sidebar/sidebar.component';
import { DashboardSuperComponent } from './component/super_admin/dashboard/dashboard_super.component';
import { NewDepartmentComponent } from './component/super_admin/department/new/new_department.component';
import { NewUserSuperComponent } from './component/super_admin/user/new/new_user.component';
import { NewEmployeeComponent } from './component/super_admin/employee/new/new_employee.component';
/* End Admin */


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SidebarSuperComponent,
    LoginComponent,
    DashboardSuperComponent,
    NewDepartmentComponent,
    NewUserSuperComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    RouterModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
