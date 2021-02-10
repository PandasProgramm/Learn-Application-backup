import {Routes} from '@angular/router';
import {BusinessEnvironmentComponent} from '../business-enviroment/business-environment.component';
import {BusinessProzessComponent} from '../business-prozess/business-prozess.component';
import {MarketAndCustomorComponent} from '../market-and-customor/market-and-customor.component';
import {ControllingComponent} from '../controlling/controlling.component';
import {SummariesBusinessEnvironmentComponent} from '../business-enviroment/summaries-business-environment/summaries-business-environment.component';
import {LearningCardsBusinessEnvironmentComponent} from '../business-enviroment/learning-cards-business-enviroment/learning-cards-business-environment.component';
import {QuizBusinessEnviromentComponent} from '../business-enviroment/quiz-business-enviroment/quiz-business-enviroment.component';
import {SummariesBusinessProzessComponent} from '../business-prozess/summaries-business-prozess/summaries-business-prozess.component';
import {LearningCardsBusinessProzessComponent} from '../business-prozess/learning-cards-business-prozess/learning-cards-business-prozess.component';
import {QuizBusinessProzessComponent} from '../business-prozess/quiz-business-prozess/quiz-business-prozess.component';
import {SummariesMarketAndCustomerComponent} from '../market-and-customor/summaries-market-and-customer/summaries-market-and-customer.component';
import {LearningCarsMarketAndCustomerComponent} from '../market-and-customor/learning-cars-market-and-customer/learning-cars-market-and-customer.component';
import {QuizMarketAndCustomerComponent} from '../market-and-customor/quiz-market-and-customer/quiz-market-and-customer.component';
import {SummariesControllingComponent} from '../controlling/summaries-controlling/summaries-controlling.component';
import {LearningCardsControllingComponent} from '../controlling/learning-cards-controlling/learning-cards-controlling.component';
import {QuizControllingComponent} from '../controlling/quiz-controlling/quiz-controlling.component';

export const BUSINESS_ROUTES:Routes=[
  {
    path:'environment',
    component: BusinessEnvironmentComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesBusinessEnvironmentComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsBusinessEnvironmentComponent
      },
      {
        path:'quiz',
        component: QuizBusinessEnviromentComponent
      }
    ]
  },
  {
    path:'process',
    component: BusinessProzessComponent,
    children: [
      {
        path: 'summaries',
        component: SummariesBusinessProzessComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsBusinessProzessComponent
      },
      {
        path: 'quiz',
        component: QuizBusinessProzessComponent
      },
    ]
  },
  {
    path:'market',
    component: MarketAndCustomorComponent,
    children:[
      {
        path:'summaries',
        component: SummariesMarketAndCustomerComponent
      },
      {
        path: 'learning-cards',
        component: LearningCarsMarketAndCustomerComponent
      },
      {
        path: 'quiz',
        component: QuizMarketAndCustomerComponent
      },
    ]
  },
  {
    path:'controlling',
    component: ControllingComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesControllingComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsControllingComponent
      },
      {
        path: 'quiz',
        component: QuizControllingComponent
      },
    ]
  },
]
