import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector : 'app-content',
    templateUrl : './dashboard_super.component.html'
})

export class DashboardSuperComponent{
    constructor(private titleService: Title){
        this.titleService.setTitle( "Dasboard" );
    }
}