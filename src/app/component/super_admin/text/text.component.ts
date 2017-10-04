import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from "@angular/platform-browser";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable()
@Component({
    selector: "app-text",
    templateUrl: "text.component.html"
})


export class TextSuperComponent {
    private dom: Document;
    constructor(private router: Router, private title: Title, @Inject( DOCUMENT ) dom: Document ) {
        this.title.setTitle("text");
    }
    
    myDown(e) {
        console.log(e);
    }

    myUp(e) {
        console.log(e);
    }

    
}