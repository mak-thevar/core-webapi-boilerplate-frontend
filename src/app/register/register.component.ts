import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService){}

  localErrors: string[] = [];


  registerForm:FormGroup =  new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    emailId: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

handleError(error:HttpErrorResponse){
  console.log(error);
  let errBody = error.error.errors;
  this.localErrors = errBody;
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
registerUser(){
  this.authService.registerUser(this.registerForm.value)
  .pipe(catchError(err=>{
    this.localErrors = err.error.errors;
    return of(null)
  }))
  .subscribe(
    res=> console.log(res)
  )
}

}
