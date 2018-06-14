import { Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import{ ForgotPasswordComponent } from'./component/forgot-password/forgot-password.component';
import { RegisterComponent } from'./component/register/register.component';
import{DashboardComponent} from'./component/module-component/dashboard/dashboard.component';
import { AuthGuard } from './_guards/index';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'app',canActivate:[AuthGuard],loadChildren: './component/module-component/structure.module#StructureModule' },
];