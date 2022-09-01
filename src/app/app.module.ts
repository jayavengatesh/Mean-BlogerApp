import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RoutingModule } from './Routes/routing/routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import  { HttpClientModule,HTTP_INTERCEPTORS } from  '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';

import { AppService } from './services/app.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { InsertComponent } from './components/users/insert/insert.component';
import { ViewComponent } from './components/users/view/view.component';
import { EditComponent } from './components/users/edit/edit.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    InsertComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    JwtModule.forRoot({ // for JwtHelperService
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    })
   
  ],
  providers: [RoutingModule,JwtHelperService,AppService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
