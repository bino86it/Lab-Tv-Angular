import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export interface LoginForm {
  email: string;
  password: string;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { 

 

}
