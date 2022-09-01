import { NgModule } from '@angular/core';


import { Routes,RouterModule } from '@angular/router';
import { LandingpageComponent } from 'src/app/components/landingpage/landingpage.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { InsertComponent } from 'src/app/components/users/insert/insert.component';
import { ViewComponent } from 'src/app/components/users/view/view.component';
import { EditComponent } from 'src/app/components/users/edit/edit.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const routes:Routes = [
  {path:'', component:LandingpageComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent,},
  {path:'profile', component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'dashboard' , component:DashboardComponent,canActivate:[AuthGuardService]},
  {path:'insert', component:InsertComponent,canActivate:[AuthGuardService]},
  {path:'view/:id', component:ViewComponent},
  {path:'edit/:id', component:EditComponent,canActivate:[AuthGuardService]},
  
] 



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
