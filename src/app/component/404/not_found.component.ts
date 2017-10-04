import {Component} from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-content',
    template : `<div id="page-wrapper">
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3">
                            <h1>404 Not Found</h1>
                        </div>
                    </div>
                </div>`
})
export class NotFoundComponent{
    constructor(private titleService: Title){
        this.titleService.setTitle( "404" );
    }
}