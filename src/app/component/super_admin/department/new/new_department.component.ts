import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector : "app-content",
    templateUrl : './new_department.component.html'
})

export class NewDepartmentComponent{
    constructor(private titleService: Title){
        this.titleService.setTitle( "New Department" );
    }
   
    create(value){
        console.log(value);
    }
}