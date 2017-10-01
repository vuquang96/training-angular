import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
    selector: "sidebar",
    templateUrl: "sidebar.component.html"
})

export class SidebarSuperComponent {
    public _id;
    constructor( private authService: AuthService, private router: Router) {
        this._id = localStorage.getItem('id');
    }
    logout() {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }
}