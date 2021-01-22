import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './navigation/home/home.component';
import { BuisnessAdministrationComponent } from './features/business-administration/buisness-administration/buisness-administration.component';
import { LoginComponent } from './navigation/login/login.component';
import {RouterModule} from '@angular/router';
import {userRouting} from './navigation/routing/routing';
import { CommonPartComponent } from './features/common-part/common-part.component';
import { ReviewComponent } from './features/review/Review/review.component';
import { SystemIntegrationComponent } from './features/system-integration-part/system-integration/system-integration.component';
import { ApplicationDevelopmentComponent } from './features/development-part/application-development/application-development.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BtnListenerDirective } from './navigation/shared/directives/btn-listener.directive';
import { PageNotFoundComponent } from './navigation/page-not-found/page-not-found.component';
import {BusinessAdministrationModule} from './features/business-administration/business-administration.module';
import {DevelopmentPartModule} from './features/development-part/development-part.module';
import {SystemIntegrationPartModule} from './features/system-integration-part/system-integration-part.module';
import {NavigationModule} from './navigation/navigation.module';
import {CommonPartModule} from './features/common-part/common-part.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    userRouting,
    ReactiveFormsModule,
    BusinessAdministrationModule,
    DevelopmentPartModule,
    SystemIntegrationPartModule,
    NavigationModule,
    CommonPartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
