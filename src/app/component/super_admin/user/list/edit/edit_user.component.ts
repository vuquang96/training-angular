import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { AuthService } from '../../../../../services/auth.service'

@Component({
    selector: "app-content",
    templateUrl: './edit_user.component.html'
})

export class EditUserComponent implements OnInit, OnDestroy {
    subscription: any;
    id: number;
    public user;
    public isAdmin  = false;
    public isMember = false;
    public level = [
        {key : '0', 'level' : "Supper Admin"},
        {key : '1', 'level' : "Admin"},
        {key : '2', 'level' : "Member"},
    ];
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {

    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        this.authService.getDetail(this.id).subscribe((response: any) => {
            this.user = response.result;
            if(this.user.level == 1){
                this.isAdmin = true;
            }else if(this.user.level == 2){
                this.isMember = true;
            }
        });
    }

    update(value){
        this.authService.update(this.id, this.user).subscribe(response => {
            if(response){
                alert("Udate Success!");
                this.router.navigate(["/super-admin/user/list"]);
            }
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe;
    }
}