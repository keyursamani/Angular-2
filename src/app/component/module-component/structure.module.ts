import { NgModule } from '@angular/core';
import {  ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StructureComponent } from './structure.component';
import { HeadercomponentComponent } from './header/headercomponent/headercomponent.component';
import { FooterComponent } from './footer/footer.component';
import { AlertService, AuthenticationService, UserService } from '../../_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../../_guards/index';
import { fakeBackendProvider,JwtInterceptor } from '../../_helpers/index';
import { HttpModule } from '@angular/http';
export const routes: Routes = [
  {
    path: '',
    component: StructureComponent,
    children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent }
    ]
  },
];



@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    StructureComponent,
    DashboardComponent,
    HeadercomponentComponent,
    FooterComponent
   
  ],
  providers: [
    AlertService,
    AuthenticationService,
    AuthGuard,
    UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
     // provider used to create fake backend
     fakeBackendProvider    
  ],
})

export class StructureModule { }
