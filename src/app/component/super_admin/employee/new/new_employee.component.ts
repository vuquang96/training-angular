import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: "app-content",
    templateUrl: './new_employee.component.html'
})

export class NewEmployeeComponent {
    constructor(private titleService: Title) {
        this.titleService.setTitle("New Employee");
    }

}