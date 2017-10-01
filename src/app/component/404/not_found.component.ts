import {Component} from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'not-found',
    template : `<h1>404 Not Found</h1>`
})
export class NotFoundComponent{
    constructor(private titleService: Title){
        this.titleService.setTitle( "404" );
    }
}