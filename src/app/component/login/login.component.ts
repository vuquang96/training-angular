import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: "app-content",
    templateUrl: './login.component.html'
})

export class LoginComponent {
    message = "sorry, the wrong information";
    messageStatus = true;
    constructor(private authService: AuthService, private router: Router) {
        console.log(localStorage);
    }
    login(value) {
        this.authService.login(value.email, value.password).subscribe((response: any) => {
            this.authService.getAuthUser().subscribe((response: any) => {
                if (response) {
                    localStorage.setItem('level', response.result.level);
                    localStorage.setItem('id', response.result.id);
                    this.router.navigate(["/super-admin/dashboard"]);
                }
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
            this.messageStatus = false;
        });
    }
}