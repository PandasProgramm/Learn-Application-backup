import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forRegistration:boolean=false;
  loginForm:FormGroup;
  PATH:string= '/login'
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({

      'email': new FormControl(
        null,
        Validators.compose([Validators.required,Validators.email])),

      'password': new FormControl(
                  null,
                  Validators.compose([Validators.required,Validators.minLength(8)])),
    })
  }
  loginUserTest(){
    const user=this.loginForm.value;
    this.userService.getUser(user.id);
    alert(user.email)
  }


  isActive():boolean {
    return this.PATH===this.router.url;
  }
}
