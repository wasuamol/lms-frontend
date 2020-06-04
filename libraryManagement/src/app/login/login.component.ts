import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserAuthServiceService } from '../services/user-auth-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user = new User();  
  
  constructor(private userAuthService : UserAuthServiceService, private router : Router) { }  
  
  ngOnInit() {  
    if((this.userAuthService.isLoggedIn()) )  
    {  
        this.router.navigate(['/profile' , localStorage.getItem('id')]);  
    }  
    else  
    {  
        this.router.navigate(['/login']);  
    } 
  }  
  
  // create the form object.  
  form = new FormGroup({  
    usertype : new FormControl('',Validators.required),
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required)  
  });  

  get fval() { return this.form.controls; }
  
  Login(LoginInformation)  
  {  
      this.user.email = this.Email.value;  
      this.user.password = this.Password.value;  
      this.user.type = this.Type.value;
  
      this.userAuthService.login(this.user).subscribe(  
        response => {  
            let result =  response.json();  
              
            if(result > 0)  
            {  
              let token = response.headers.get("Authorization");  
  
              localStorage.setItem("token" , token);  
              localStorage.setItem("id" , result);  
    
              this.router.navigate(['/profile', result]);  
            }  
            if(result == -1)  
            {  
              alert("please register before login Or Invalid combination of Email and password");  
            }  
             
        },  
        error => {  
            console.log("Error in authentication");  
        }  
      );  
  }  
  
  get Email(){  
      return this.form.get('email');  
  }  
  
  get Password(){  
      return this.form.get('password');  
  }

  get Type(){  
    return this.form.get('type');  
}


}
