import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class AuthService {
    headers: Headers = new Headers;
    public _isLoggedIn: boolean;
    public apiUrl = "http://localhost:8080/lar-angular/public/api/";
    public _token = localStorage.getItem('token');

    constructor(public http: Http) {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    isLogged() {
        let level = localStorage.getItem('level');
        if (level == "0") {
            return true;
        }
        return false;
    }

    isNotLogged() {
        return !this._isLoggedIn;
    }

    login(email, password) {
        return this.http.post(this.apiUrl + 'auth/login', { email: email, password: password })
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('token', user.token);
                }
            });
    }

    getAuthUser(): Observable<any[]> {
        return this.http.get(this.apiUrl + 'administrator/user?token=' + this._token).map((response: Response) => response.json());
    }


    isSuperAdmin(): any {
        this.http.get(this.apiUrl + 'administrator/user?token=' + this._token).map((response: Response) => {
            let data = response.json();
            if (data) {
                if (data.result.level == 0) {
                    return true;
                }
            }
            return false;
        });
    }


    getListUser(): Observable<any[]> {
        return this.http.get(this.apiUrl + 'administrator/users?token=' + this._token).map((response: Response) => response.json());
    }

    getDetail(id: number): Observable<any[]>{
        return this.http.get(this.apiUrl + 'administrator/user/'+id+'?token=' + this._token).map((response: Response) => response.json());
    }

    update(id:number, data) {
        return this.http.put(this.apiUrl + 'administrator/user/'+id+'?token=' + this._token, data).map((response: Response)  => response.json());
    }

    delete(id:number) {
        return this.http.delete(this.apiUrl + 'administrator/user/'+id+'?token=' + this._token).map((response: Response)  => response.json());
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('level');
        localStorage.removeItem('id');
    }

}