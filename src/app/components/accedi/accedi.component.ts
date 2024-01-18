import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
import {LoginForm} from '../../models/login.module';


@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css'],
  
  
})


  export class AccediComponent {
    loginFormData: LoginForm = {
      email: '',
      password: ''
    };
  
    submitForm() {
      console.log('Form submitted:', this.loginFormData);
    }
}







