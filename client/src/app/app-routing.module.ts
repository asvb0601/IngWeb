import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventsComponent } from './components/admin/list-events/list-events.component';
import { DetailEventComponent } from './components/detail-event/detail-event.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { List2Component } from './components/admin/list2/list2.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'event/:id', component: DetailEventComponent},
  {path: 'admin/list-event', component: ListEventsComponent}, //auth
  {path: 'admin/list2', component: List2Component}, 
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent}, //auth
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
