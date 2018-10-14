import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../_service/user.service';
import { User } from '../_model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginResult: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginResult = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }
  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }
  onSubmit() {
    let email = this.loginForm.value['email'];
    let password = this.loginForm.value['password'];
    this.userService.login({ email, password } as User).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      () => {
        this.loginResult = true;
      }
    );
  }
}
