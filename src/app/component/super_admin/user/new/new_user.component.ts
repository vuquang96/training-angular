import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service'
import { Title } from '@angular/platform-browser';

@Component({
    selector: "app-content",
    templateUrl: './new_user.component.html'
})

export class NewUserSuperComponent {
    public emailUnique = false;
    public level = [
        { key: '0', 'level': "Supper Admin" },
        { key: '1', 'level': "Admin" },
        { key: '2', 'level': "Member" },
    ];
    constructor(private router: Router, private authService: AuthService, private titleService: Title) {
        this.titleService.setTitle("New User");
    }


    create(value) {
        if(!this.emailUnique){
            this.authService.create(value).subscribe(response => {
                if(response || response.status){
                    alert(response.message);
                    this.router.navigate(["/super-admin/user/list"]);
                }
            }, error => {
                console.log(error);
            })
        }
    }

    check(value){
        this.authService.checkEmail(value).subscribe((response: any) => {
            console.log(response);
            if(response.result == true){
                this.emailUnique = true;
            }else{
                this.emailUnique = false;
            }
        }, error => {
            console.log(error);
        });
        
    }

}