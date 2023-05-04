import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material-module/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SetPasswordComponent } from './set-password/set-password.component';
import { PatientComponent } from './profile/patient/patient.component';
import { ProviderComponent } from './profile/provider/provider.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SetPasswordComponent,
    PatientComponent,
    ProviderComponent
  
   
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class CciModule { }
