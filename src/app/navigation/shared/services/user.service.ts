import { Injectable } from '@angular/core';
import {User_I} from '../../../features/models/User_I';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User_I[]=[];

  constructor() { }

  addUser(user){
    this.users.push(user);
  }
  getUser(id){
    return this.users.filter(user=>user.id===id)
  }
  getAllUsers() {
    this.loadUsers();
    return this.users;
  }
  saveUsers(){

  }
  loadUsers():User_I[]{
   const dummyUsers:string= JSON.stringify(
      [
        {
          "id":"0",
          "email": "dummy@dummyprovider.de",
          "password": "dummyPassword",
          "address": "Im Dummy 10",
          "city": "DummyTown",
          "postCode": "123456"
        }
      ]
    );
   return JSON.parse(dummyUsers);
  }
}
