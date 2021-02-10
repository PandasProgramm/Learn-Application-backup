import {RouterModule, Routes} from '@angular/router';
import {BuisnessAdministrationComponent} from '../../features/business-administration/buisness-administration/buisness-administration.component';
import {CommonPartComponent} from '../../features/common-part/common-part/common-part.component';
import {ReviewComponent} from '../../features/review/Review/review.component';
import {ApplicationDevelopmentComponent} from '../../features/development-part/application-development/application-development.component';
import {SystemIntegrationComponent} from '../../features/system-integration-part/system-integration/system-integration.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {BUSINESS_ROUTES} from '../../features/business-administration/routes/Routes';
import {COMMON_ROUTES} from '../../features/common-part/routes/Routes';
import {DEVELOPMENT_ROUTES} from '../../features/development-part/routes/routes';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {SYSTEM_INTEGRATION_ROUTES} from '../../features/system-integration-part/routing/Routes';


const HEADER_ROUTES: Routes= [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'register',
        component:RegistrationComponent
      }

    ]
  },

  {
    path:'review',
    component: ReviewComponent
  },
  {
    path: 'business-administration',
    component: BuisnessAdministrationComponent,
    children: BUSINESS_ROUTES
  },
  {
    path: 'common-part',
    component: CommonPartComponent,
    children:COMMON_ROUTES
  },
  {
    path: 'development',
    component:ApplicationDevelopmentComponent,
    children: DEVELOPMENT_ROUTES,
  },
  {
    path:'system-integration',
    component:SystemIntegrationComponent,
    children: SYSTEM_INTEGRATION_ROUTES,
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];
export const userRouting = RouterModule.forRoot(HEADER_ROUTES)
