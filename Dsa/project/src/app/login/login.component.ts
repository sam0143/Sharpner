import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
forgotPassword() {
throw new Error('Method not implemented.');
}
 public email= '';
 public password= '';

 constructor(private router:Router){ }


 checkData(){
  if(this.email === 'admin@gmail.com' && this.password === 'admin'){
    console.log("hello");
  }
  // else{
  //   alert('Please enter details')
  // }
 }
}
