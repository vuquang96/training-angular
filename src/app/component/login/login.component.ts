import {Component} from '@angular/core';

@Component({
    selector : "app-content",
    templateUrl : './login.component.html'
})

export class LoginComponent{
    login(value){
        console.log(value);
    }
}