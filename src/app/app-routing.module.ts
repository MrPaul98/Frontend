import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroundleveltokenComponent } from './Adminlevel/groundleveltoken/groundleveltoken.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DoctorComponent } from './Supervisorlevelviewtoken/doctor/doctor.component';
import { ElectricianComponent } from './Supervisorlevelviewtoken/electrician/electrician.component';
import { LawyerComponent } from './Supervisorlevelviewtoken/lawyer/lawyer.component';
import { TokenComponent } from './Token/token/token.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'token',component:TokenComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'electrician',component:ElectricianComponent},
  {path:'lawyer',component:LawyerComponent},
  {path:'groundleveltoken',component:GroundleveltokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
