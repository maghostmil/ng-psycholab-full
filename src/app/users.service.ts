import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

  currentUser: any;
  
    setCurrentUser(user){
     this.currentUser = user;
    }
  
    getCurrentUser(){
      return this.currentUser;
    }

}
