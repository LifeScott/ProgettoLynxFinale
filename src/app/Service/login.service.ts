import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private loginEvent : Subject<void> = new Subject<void>();
public loginsEvent$ = this.loginEvent.asObservable();
  constructor(private router : Router) { }



doLogin(name : string , pass : string) : void{
    if(name.length > 2 && pass.length > 4)
    sessionStorage.setItem('user', name);
    this.loginEvent.next();
    this.router.navigateByUrl('home');
  }
  
  doLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login')
    this.loginEvent.next();
  }

  checkLogin(){
    return (!! sessionStorage.getItem('user'));
  }
  regPage(){
    this.router.navigateByUrl('/register');
  }
}
