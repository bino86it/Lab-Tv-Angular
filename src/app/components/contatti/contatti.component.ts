import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  loginForm: FormGroup;
  submitAttempted = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{2,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      messaggio:['', [Validators.required,Validators.pattern(/.{20,}/)]],
      privacy: [false, Validators.required],
    });


}

submitForm() {
  if (this.loginForm.valid) {
    this.submitAttempted = true;
    console.log('Form submitted:', this.loginForm.value);
  }
}

}