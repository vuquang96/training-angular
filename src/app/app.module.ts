import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { AppRoute } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/404/not_found.component';

/* Services */
import { AuthService } from './services/auth.service';
/* End Services */

/* Guards */
import { LoginGuards } from './guards/auth/login.guards';
import { NotLoginGuards } from './guards/auth/not_login.guards';
/* End Guards */

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
    NewEmployeeComponent,
    FileDropDirective,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoute,
    RouterModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AuthService,
    LoginGuards,
    NotLoginGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
