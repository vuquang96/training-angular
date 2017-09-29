import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: "app-content",
    templateUrl: './new_employee.component.html'
})

export class NewEmployeeComponent implements OnInit {
    nameFile;
   
    constructor(private titleService: Title) {
        this.titleService.setTitle("New Employee");
    }
    ngOnInit() {
        //this.uploader = new FileUploader({url: `YOUR URL`});
    }
    triggerPhoto() {
        $("#photo").trigger("click");
    }
    change() {
        this.nameFile = $("#photo").val();
        $(".photo-add").html(this.nameFile);
    }
    DeletePhoto() {
        $("#photo").val("");
        $(".photo-add").html("Photo");
    }
    create(value) {
        console.log(value);
    }

}