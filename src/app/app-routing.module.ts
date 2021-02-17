import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component'
import { OneEventComponent } from './one-event/one-event.component';
import { UserPageComponent } from './user-page/user-page.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component'

export const appRoutes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'one-event', component: OneEventComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'my-profile', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
