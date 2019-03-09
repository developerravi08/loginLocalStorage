import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  private Login = {} as Login

  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit() {
    this.createLoginFrom()
  }

  createLoginFrom() {
    this.loginForm = this.formBuilder.group(
      {
        userName: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])]
      },
    )

  }

  login() {
    this.Login.credentials = this.loginForm.value.userName
    this.Login.password = this.loginForm.value.password
    console.log('this.loginForm.value', this.Login)
    this.loginService.loginUser(this.Login).subscribe(resp => {
      console.log('resp', resp)
    })
  }





}
