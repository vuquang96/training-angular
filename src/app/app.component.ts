import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  public sidebar = false;
  public title = "AppComponent";
  constructor(private titleService: Title, private authService: AuthService){
    this.titleService.setTitle( 'Login' );
    if(this.authService.isLogged()){
      this.sidebar = true;
    }
  }
}
