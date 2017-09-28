import {Component} from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component ({
    selector : 'app-content',
    templateUrl : './new_user.component.html'
})
export class NewUserSuperComponent{
    constructor(private titleService: Title){
        this.titleService.setTitle( "New User" );
    }
    create(value){
        console.log(value);
    }
}