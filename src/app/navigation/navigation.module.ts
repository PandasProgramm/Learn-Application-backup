import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {BtnListenerDirective} from './shared/directives/btn-listener.directive';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularToastifyModule, ToastService} from 'angular-toastify';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    BtnListenerDirective,
    PageNotFoundComponent,
    RegistrationComponent
  ],
    exports: [
        HomeComponent,
        BtnListenerDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AngularToastifyModule
    ],
    providers:[ToastService]
})
export class NavigationModule { }
