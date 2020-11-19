import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
