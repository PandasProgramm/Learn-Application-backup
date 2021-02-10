import { Component, OnInit,EventEmitter } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User_I} from '../../features/models/User_I';
import {Router} from '@angular/router';
import {ToastService} from 'angular-toastify';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registryForm:FormGroup;
  constructor(private userService:UserService,private router:Router,private _toastService:ToastService) { }


  ngOnInit(): void {
    this.registryForm=new FormGroup({

      'email': new FormControl(
               null,
               Validators.compose([Validators.required,Validators.email])),

      'password': new FormControl(
                  null,
                  [Validators.required,Validators.minLength(8)]),

      'address': new FormControl(
                 null,
                 Validators.pattern("[0-9]")),

      'city': new FormControl(null,Validators.minLength(5)),

      'zipCode': new FormControl(
                  null,
                  Validators.pattern('[0-9]{5}'),
        )
    })
  }
  onSubmit(){
      const newUser:User_I = this.registryForm.value
      this.userService.addUser(newUser);
    this.addInfoToast();
      setTimeout(()=>{
        this.router.navigate(["/"]);
      },2000);
  }
  addInfoToast() {
    this._toastService.info('Registrierung erfolgreich');
  }

}
