import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {
  myForm : FormGroup;
  errore : string;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.create();
  }

  create(){
    this.myForm = this.fb.group({
      name : ['' , Validators.required], 
      email : ['' , Validators.required], 
      commento : ['' , Validators.required], 
      cognome : ['' , Validators.required]
  
    });
  }

  getInputName() : FormControl{
    return this.myForm.get('name') as FormControl;
  }
  getInputCognome() : FormControl{
    return this.myForm.get('cognome') as FormControl;
  }
  getInputEmail() : FormControl{
    return this.myForm.get('email') as FormControl;
  }
  getInputCommento() : FormControl{
    return this.myForm.get('commento') as FormControl;
  }
  getInputTelefono() : FormControl{
    return this.myForm.get('telefono') as FormControl;
  }
  getInputSesso() : FormControl{
    return this.myForm.get('sesso') as FormControl;
  }

  sendEmail(){
    let link = 'mailto:scottthushyanthan@gmail.com?subject=Message from '+this.getInputEmail().value
    +'&body='+"Nome:"+this.getInputName().value+"    Surname:"+this.getInputCognome().value+"       Email:"+this.getInputEmail().value+"        Comment:"+this.getInputCommento().value;
    window.location.href = link;
  }
}
