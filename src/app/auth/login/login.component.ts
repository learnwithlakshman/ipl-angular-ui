import { JwtRequest } from '../../shared/models/auth.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  requestUser:JwtRequest;
  errorMessage;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  get f() { return this.loginForm.controls; }
  login() {
    this.requestUser = this.loginForm.value;
    this.authService.login(
      this.requestUser
    ).subscribe(
      success => {
        if (success) {
          console.log(success);
          this.router.navigate(['/ipl/tournmnet']);
        }else{
          this.errorMessage = "Invalid credentials";
        }
      },
      error=>{
        this.errorMessage = "Invalid credentials";
      }
       
    )
  }
}