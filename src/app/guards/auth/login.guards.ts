import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CanActivate } from '@angular/router'

@Injectable()

export class LoginGuards implements CanActivate {
    constructor(private authService: AuthService) {
        
    }
    canActivate(){
        return this.authService.isLogged();
    }
}