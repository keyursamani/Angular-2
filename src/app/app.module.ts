import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HttpClientModule} from '@angular/common/http';
// import{StructureModule} from './component/module-component/structure.module' 
// import { DashboardComponent } from './component/module-component/dashboard/dashboard.component';
// import{StructureComponent} from'./component/module-component/structure.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { fakeBackendProvider } from './_helpers/index';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
    
    // DashboardComponent,
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
    // StructureModule
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
  bootstrap: [ AppComponent ]
})
export class AppModule {

}