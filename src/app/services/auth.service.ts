import {Injectable} from '@angular/core';

@Injectable()

export class AuthService{
    public _isLoggedIn: boolean;

    isLogged(){
        return this._isLoggedIn;
    }
    isNotLogged(){
        return !this._isLoggedIn;
    }
    setLogin(isLoggedIn){
        this._isLoggedIn = isLoggedIn;
    }
}