import { Component } from '@angular/core';
import {FormControl, Validators,FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,private router: Router,private route: ActivatedRoute){
  }

  ngOnInit() {
    this.initLoginForm();
  }



  initLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }


  login(){
    localStorage.setItem('isToken', '1');
    this.router.navigate(['/products'])
  }
}
