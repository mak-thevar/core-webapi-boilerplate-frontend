import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authService: AuthService, private router:Router){}

  errorMessage:string = '';
  login(){
    
      this.authService.login(this.loginForm.value)
      .subscribe({
        next: (res:any)=>{
          let theToken = res.result.authToken;
          localStorage.setItem('accessToken',theToken);
          //this.currentUser = res.result.userData;
          this.router.navigate(['home']);
        },
        error: e=>{
          console.log(e);
          this.errorMessage = e.error? e.error.errors.join('\r\n'): e.message;
        }
      }
      )
    }
}
