import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonPartComponent} from './common-part.component';
import { SymplifiedItSystemsComponent } from '../symplified-it-systems/symplified-it-systems.component';
import { CrossLinkedSystemsComponent } from '../cross-linked-systems/cross-linked-systems.component';
import { PublicNetworkComponent } from '../public-network/public-network.component';
import { SystemAdministrationComponent } from '../system-administration/system-administration.component';
import {RouterModule} from '@angular/router';
import {BusinessAdministrationModule} from '../../business-administration/business-administration.module';



@NgModule({
  declarations: [
    CommonPartComponent,
    SymplifiedItSystemsComponent,
    CrossLinkedSystemsComponent,
    PublicNetworkComponent,
    SystemAdministrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BusinessAdministrationModule
  ]
})
export class CommonPartModule { }
