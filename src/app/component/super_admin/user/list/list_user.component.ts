import { Component, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'app-content',
    templateUrl: './list_user.component.html'
})
export class ListUserSuperComponent implements OnInit {
    public users: any;
    constructor(private titleService: Title, private authService: AuthService) {
        this.titleService.setTitle("list User");
    }
    ngOnInit() {
        this.loadData();
    }
    create(value) {
        console.log(value);
    }

    delete(id) {
        let confirmResult = confirm("Are you sure to delete User ?");
        if (confirmResult) {
            this.authService.delete(id).subscribe(response => {
                if (response) {
                    alert("Delete success !");
                    this.loadData();
                }
            });
        }
    }

    loadData() {
        this.authService.getListUser().subscribe((response: any) => {
            this.users = response.result;
        }, error => {
            console.log(error);
        })
    }
}