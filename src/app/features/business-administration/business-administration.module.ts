import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuisnessAdministrationComponent} from './buisness-administration/buisness-administration.component';
import {NavigationModule} from '../../navigation/navigation.module';
import { SelectedItemDirective } from '../../navigation/shared/directives/selected-item.directive';
import { BusinessEnvironmentComponent } from './business-enviroment/business-environment.component';
import { BusinessProzessComponent } from './business-prozess/business-prozess.component';
import { MarketAndCustomorComponent } from './market-and-customor/market-and-customor.component';
import { ControllingComponent } from './controlling/controlling.component';
import {RouterModule} from '@angular/router';
import { QuizBusinessEnviromentComponent } from './business-enviroment/quiz-business-enviroment/quiz-business-enviroment.component';
import { LearningCardsBusinessEnvironmentComponent } from './business-enviroment/learning-cards-business-enviroment/learning-cards-business-environment.component';
import { QuizBusinessProzessComponent } from './business-prozess/quiz-business-prozess/quiz-business-prozess.component';
import { LearningCardsBusinessProzessComponent } from './business-prozess/learning-cards-business-prozess/learning-cards-business-prozess.component';
import { SummariesBusinessProzessComponent } from './business-prozess/summaries-business-prozess/summaries-business-prozess.component';
import { QuizControllingComponent } from './controlling/quiz-controlling/quiz-controlling.component';
import { LearningCardsControllingComponent } from './controlling/learning-cards-controlling/learning-cards-controlling.component';
import { SummariesControllingComponent } from './controlling/summaries-controlling/summaries-controlling.component';
import { QuizMarketAndCustomerComponent } from './market-and-customor/quiz-market-and-customer/quiz-market-and-customer.component';
import { LearningCarsMarketAndCustomerComponent } from './market-and-customor/learning-cars-market-and-customer/learning-cars-market-and-customer.component';
import { SummariesMarketAndCustomerComponent } from './market-and-customor/summaries-market-and-customer/summaries-market-and-customer.component';
import { SummariesBusinessEnvironmentComponent } from './business-enviroment/summaries-business-environment/summaries-business-environment.component';
import {CardboxModule} from '../cardbox/cardbox.module';



@NgModule({
  declarations: [
    BuisnessAdministrationComponent,
    SelectedItemDirective,
    BusinessEnvironmentComponent,
    BusinessProzessComponent,
    MarketAndCustomorComponent,
    ControllingComponent,
    QuizBusinessEnviromentComponent,
    LearningCardsBusinessEnvironmentComponent,
    QuizBusinessProzessComponent,
    LearningCardsBusinessProzessComponent,
    SummariesBusinessProzessComponent,
    QuizControllingComponent,
    LearningCardsControllingComponent,
    SummariesControllingComponent,
    QuizMarketAndCustomerComponent,
    LearningCarsMarketAndCustomerComponent,
    SummariesMarketAndCustomerComponent,
    SummariesBusinessEnvironmentComponent,
  ],
  exports: [
    SelectedItemDirective
  ],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule,
    CardboxModule
  ]
})
export class BusinessAdministrationModule { }
