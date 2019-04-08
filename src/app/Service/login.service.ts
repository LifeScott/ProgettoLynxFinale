import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.class';
import { UserService } from '../UserService';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginEvent: Subject<void> = new Subject<void>();
  public loginsEvent$ = this.loginEvent.asObservable();
  users: User[];
  constructor(private router: Router, private userService: UserService) { }



  doLogin(name: string, pass: string): void {
    this.users = this.userService.retrieveRegisteredUsers();
    const userToLogged = this.users.find(item => {
      return name === item.firstname;
    });

    if (userToLogged) {
      sessionStorage.setItem('user', JSON.stringify(userToLogged));
      this.loginEvent.next();
      this.router.navigateByUrl('homepage');
    }

  }

  doLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
    this.loginEvent.next();
  }

  checkLogin() {
    return (!!sessionStorage.getItem('user'));
  }
  regPage() {
    this.router.navigateByUrl('/registrazione');
  }
}
