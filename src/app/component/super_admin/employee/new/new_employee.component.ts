import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
    selector: "app-content",
    templateUrl: './new_employee.component.html'
})

export class NewEmployeeComponent {
    nameFile;
    constructor(private titleService: Title) {
        this.titleService.setTitle("New Employee");
    }
    triggerPhoto(){
        $("#photo").trigger("click");
    }
    change(){
        this.nameFile = $("#photo").val();
        $(".photo-add").html(this.nameFile);
    }
    DeletePhoto(){
        $("#photo").val("");
        $(".photo-add").html("Photo");
    }
    create(value){
        console.log(value);
    }
}