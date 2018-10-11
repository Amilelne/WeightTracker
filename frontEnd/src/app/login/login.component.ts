import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  email;
  password;

  loginForm = new FormGroup({
    email: new FormControl(this.email, [Validators.required]),
    password: new FormControl(this.password, [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  onSubmit() {
    console.log(this.loginForm.value);
  }
}
