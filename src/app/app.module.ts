import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarsComponent } from './components/navbars/navbars.component';
import { FormsModule } from '@angular/forms';
import { TokenComponent } from './Token/token/token.component';
import { ElectricianComponent } from './Supervisorlevelviewtoken/electrician/electrician.component';
import { DoctorComponent } from './Supervisorlevelviewtoken/doctor/doctor.component';
import { LawyerComponent } from './Supervisorlevelviewtoken/lawyer/lawyer.component';
import { GroundleveltokenComponent } from './Adminlevel/groundleveltoken/groundleveltoken.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarsComponent,
    TokenComponent,
    ElectricianComponent,
    DoctorComponent,
    LawyerComponent,
    GroundleveltokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
