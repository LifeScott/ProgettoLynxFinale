import { Injectable } from '@angular/core';
import { User } from './models/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router) { }


  registration(formValue: User) {
    if (formValue) {
      let currentUsers: User[];
      const currentUsersFromLS = localStorage.getItem('registerUsers');
      if (currentUsersFromLS) {
        currentUsers = JSON.parse(currentUsersFromLS);
      }else{
        currentUsers = [];
      }
      currentUsers.push(formValue);
      localStorage.setItem('registerUsers', JSON.stringify(currentUsers));
//this.router.navigateByUrl('');
    }
  }
}



