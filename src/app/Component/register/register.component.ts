import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/UserService';
import { User } from 'src/app/models/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  register: false;




  constructor(private formb: FormBuilder, private userservice: UserService) {
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.formb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['', Validators.required]


    });
  }

  onSubmit() {
    this.userservice.registration(this.registerForm.value);
  }
  // toRegPage(){
  // this.UserService.logPage();
}
