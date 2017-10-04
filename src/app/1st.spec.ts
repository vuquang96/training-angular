import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


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
import { SuperAdmin } from './guards/auth/super_admin.guards';
/* End Guards */

/* Super Admin */
import { SidebarSuperComponent } from './component/super_admin/sidebar/sidebar.component';
import { DashboardSuperComponent } from './component/super_admin/dashboard/dashboard_super.component';
import { NewDepartmentComponent } from './component/super_admin/department/new/new_department.component';
import { NewUserSuperComponent } from './component/super_admin/user/new/new_user.component';
import { NewEmployeeComponent } from './component/super_admin/employee/new/new_employee.component';
import { ListUserSuperComponent } from './component/super_admin/user/list/list_user.component';
import { DetailUserComponent } from './component/super_admin/user/list/detail/detail_user.component';
import { EditUserComponent } from './component/super_admin/user/list/edit/edit_user.component';
import { TextSuperComponent } from './component/super_admin/text/text.component';
/* End Admin */
import { APP_BASE_HREF } from '@angular/common';
import { Title } from '@angular/platform-browser';

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      NotFoundComponent,
      SidebarSuperComponent,
      LoginComponent,
      DashboardSuperComponent,
      NewDepartmentComponent,
      NewUserSuperComponent,
      NewEmployeeComponent,
      ListUserSuperComponent,
      DetailUserComponent,
      EditUserComponent,
      TextSuperComponent,
    ],
    imports: [
      AppRoute,
      RouterModule,
      FormsModule,
      HttpModule,
     
    ],
    providers: [
      AuthService,
      LoginGuards,
      NotLoginGuards,
      SuperAdmin,
      { provide: APP_BASE_HREF, useValue: '/' },
      Title,
    ],
  })
});

