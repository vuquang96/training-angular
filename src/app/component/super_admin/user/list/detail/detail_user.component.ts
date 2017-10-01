import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { AuthService } from '../../../../../services/auth.service'

@Component({
    selector: "app-content",
    templateUrl: './detail_user.component.html'
})

export class DetailUserComponent implements OnInit, OnDestroy {
    subscription: any;
    id: number;
    public user;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {

    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        this.authService.getDetail(this.id).subscribe((response: any) => {
            this.user = response.result;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe;
    }
}