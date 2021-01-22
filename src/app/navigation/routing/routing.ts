import {RouterModule, Routes} from '@angular/router';
import {BuisnessAdministrationComponent} from '../../features/business-administration/buisness-administration/buisness-administration.component';
import {CommonPartComponent} from '../../features/common-part/common-part.component';
import {ReviewComponent} from '../../features/review/Review/review.component';
import {ApplicationDevelopmentComponent} from '../../features/development-part/application-development/application-development.component';
import {SystemIntegrationComponent} from '../../features/system-integration-part/system-integration/system-integration.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';


const HEADER_ROUTES: Routes= [
  {
    path:'',
    component: ReviewComponent
  },
  {
    path: 'business-administration',
    component: BuisnessAdministrationComponent
  },
  {
    path: 'common-part',
    component: CommonPartComponent
  },
  {
    path: 'development',
    component:ApplicationDevelopmentComponent
  },
  {
    path:'system-integration',
    component:SystemIntegrationComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];
export const userRouting = RouterModule.forRoot(HEADER_ROUTES)
