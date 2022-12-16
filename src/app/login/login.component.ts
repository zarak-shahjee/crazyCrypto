import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {AuthResponseData, AuthService} from 'src/app/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode=true;
  @Output() loginEvent = new EventEmitter<boolean>();

  constructor(private authService:AuthService) { }
  isLoading= false;
  error=null;
  ngOnInit(): void {
  }
 onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
 }
 onFormSubmit(authForm: NgForm) {
  if (!authForm.valid) {
    return;
  }

  this.isLoading = true;
  this.error = null;

  let authObs: Observable<AuthResponseData>;

  if (this.isLoginMode) {
    authObs = this.authService.login(
      authForm.value.email,
      authForm.value.password
    );
  } else {
    authObs = this.authService.signUp(
      authForm.value.email,
      authForm.value.password
    );
  }

  authObs.subscribe(
    (response) => {
      console.log(response);
      this.isLoading = false;
      this.loginEvent.emit(true);
     
    },
    (em) => {
      this.error = em;
  
      this.isLoading = false;
    }
  );
}

 getPasswordErrors(password: FormControl) {
  if (password.errors.required) {
    return 'Password Required';
  }
  if (password.errors.minlength) {
    return 'password is of 6 characters';
  }
}
}
