import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../../../services/auth.service'
import { Title } from '@angular/platform-browser';
@Component({
    selector: "app-content",
    templateUrl: './new_user.component.html'
})

export class NewUserSuperComponent {
    public level = [
        {key : '0', 'level' : "Supper Admin"},
        {key : '1', 'level' : "Admin"},
        {key : '2', 'level' : "Member"},
    ];
    constructor(private router: Router, private authService: AuthService, private titleService: Title) {
        this.titleService.setTitle( "New User" );
    }
    

    create(value){
        
    }

   
}