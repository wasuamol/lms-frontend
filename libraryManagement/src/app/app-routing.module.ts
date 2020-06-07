import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';  
import { HomeComponent } from './home/home.component';  
import { RegistrationComponent } from './registration/registration.component'
import { UserHomeComponent } from './user-home/user-home.component';  
import { AdminHomeComponent } from './admin-home/admin-home.component';  



const routes: Routes = [  
  {  
    path : '',  
    component : HomeComponent   
  }, 
  {  
    path : 'home',  
    component : HomeComponent   
  }, 
  {  
    path : 'login',  
    component : LoginComponent    
  },  
  {  
    path : 'registration',  
    component : RegistrationComponent   
  }, 
  {  
    path : 'userhome',  
    component : UserHomeComponent   
  },
  {  
    path : 'adminhome',  
    component : AdminHomeComponent   
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
