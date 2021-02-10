import {Routes} from '@angular/router';
import {SymplifiedItSystemsComponent} from '../symplified-it-systems/symplified-it-systems.component';
import {CrossLinkedSystemsComponent} from '../cross-linked-systems/cross-linked-systems.component';
import {PublicNetworkComponent} from '../public-network/public-network.component';
import {SystemAdministrationComponent} from '../system-administration/system-administration.component';
import {SummariesCrossLinkedSystemsComponent} from '../cross-linked-systems/summaries-cross-linked-systems/summaries-cross-linked-systems.component';
import {LearningCardsCrossLinkedSystemsComponent} from '../cross-linked-systems/learning-cards-cross-linked-systems/learning-cards-cross-linked-systems.component';
import {QuizCrossLinkedSystemsComponent} from '../cross-linked-systems/quiz-cross-linked-systems/quiz-cross-linked-systems.component';
import {SummariesPublicNetworkComponent} from '../public-network/summaries-public-network/summaries-public-network.component';
import {LearningCardsPublicNetworkComponent} from '../public-network/learning-cards-public-network/learning-cards-public-network.component';
import {QuizPublicNetworkComponent} from '../public-network/quiz-public-network/quiz-public-network.component';
import {SummariesSystemAdministrationComponent} from '../system-administration/summaries-system-administration/summaries-system-administration.component';
import {LearningCardsSystemAdministrationComponent} from '../system-administration/learning-cards-system-administration/learning-cards-system-administration.component';
import {QuizSystemAdministrationComponent} from '../system-administration/quiz-system-administration/quiz-system-administration.component';
import {SummariesSymplifiedSystemsComponent} from '../symplified-it-systems/summaries-symplified-systems/summaries-symplified-systems.component';
import {LearningCardsSymplifiedSystemsComponent} from '../symplified-it-systems/learning-cards-symplified-systems/learning-cards-symplified-systems.component';
import {QuizSymplifiedItSystemsComponent} from '../symplified-it-systems/quiz-symplified-it-systems/quiz-symplified-it-systems.component';


export const COMMON_ROUTES:Routes=[
  {
    path:'simplifiedItSystems',
    component: SymplifiedItSystemsComponent,
    children:[
      {
        path:'summaries',
        component: SummariesSymplifiedSystemsComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsSymplifiedSystemsComponent
      },
      {
        path:'quiz',
        component: QuizSymplifiedItSystemsComponent
      },
    ]
  },
  {
    path:'crossLinkedSystems',
    component: CrossLinkedSystemsComponent,
    children:[
      {
        path:'summaries',
        component: SummariesCrossLinkedSystemsComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsCrossLinkedSystemsComponent
      },
      {
        path:'quiz',
        component:QuizCrossLinkedSystemsComponent
      },
    ]
  },
  {
    path:'publicNetworkSystems',
    component: PublicNetworkComponent,
    children:[
      {
        path:'summaries',
        component: SummariesPublicNetworkComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsPublicNetworkComponent
      },
      {
        path:'quiz',
        component: QuizPublicNetworkComponent
      },
    ]
  },
  {
    path:'systemAdministration',
    component: SystemAdministrationComponent,
    children:[
      {
        path:'summaries',
        component: SummariesSystemAdministrationComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsSystemAdministrationComponent
      },
      {
        path:'quiz',
        component: QuizSystemAdministrationComponent
      },
    ]
  },
]
