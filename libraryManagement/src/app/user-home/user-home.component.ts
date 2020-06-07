import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserAuthServiceService } from '../services/user-auth-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private userAuthService : UserAuthServiceService, private router : Router) { } 

  ngOnInit() {
    if((this.userAuthService.isLoggedIn()) )  
    {  
        let typ = localStorage.getItem('type');  
        if(typ=='L'){
          this.router.navigate(['/adminhome']);  
        }else{
          this.router.navigate(['/userhome']);  
        }
    }  
    else  
    {  
        this.router.navigate(['/login']);  
    }
  }

  

}
