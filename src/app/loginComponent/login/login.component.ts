import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    myForm : FormGroup;
  constructor(private fb : FormBuilder, private loginService : LoginService ) { }

  ngOnInit() {
    this.create();
  }
create(){
  this.myForm = this.fb.group({
    name : ['' , Validators.required], 
    password : ['' , Validators.required]

  })
}
getInputName() : FormControl{
  return this.myForm.get('name') as FormControl;
}
getInputPassword() : FormControl{
  return this.myForm.get('password') as FormControl;
}
callLogin(){
this.loginService.doLogin(this.getInputName().value , this.getInputPassword().value);
}
toRegPage(){
  this.loginService.regPage();
}
}
