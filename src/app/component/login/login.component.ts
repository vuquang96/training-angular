import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: "app-content",
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) {
        if(this.authService.isLogged()){
            this.router.navigate(["super-admin/dashboard"]);
        }
    }
    login(value) {
        console.log(value);
        this.authService.setLogin(true);
        this.router.navigate(["super-admin/dashboard"]);
    }
}