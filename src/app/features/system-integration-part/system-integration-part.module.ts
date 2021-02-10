import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemIntegrationComponent} from './system-integration/system-integration.component';
import {BusinessAdministrationModule} from '../business-administration/business-administration.module';
import { NetworkEngineeringComponent } from './network-engineering/network-engineering.component';
import { ServerComponent } from './server/server.component';
import { ConsoleComponent } from './console/console.component';
import { ItSafetyComponent } from './it-savety/it-safety.component';
import {RouterModule} from '@angular/router';
import { SummariesConsoleComponent } from './console/summaries-console/summaries-console.component';
import { QuizConsoleComponent } from './console/quiz-console/quiz-console.component';
import { LearningCardsConsoleComponent } from './console/learning-cards-console/learning-cards-console.component';
import { SummariesItSafetyComponent } from './it-savety/summaries-it-safety/summaries-it-safety.component';
import { QuizItSafetyComponent } from './it-savety/quiz-it-safety/quiz-it-safety.component';
import { LearningCarsItSafetyComponent } from './it-savety/learning-cars-it-safety/learning-cars-it-safety.component';
import { SummariesNetworkEngineeringComponent } from './network-engineering/summaries-network-engineering/summaries-network-engineering.component';
import { QuizNetworkEngineeringComponent } from './network-engineering/quiz-network-engineering/quiz-network-engineering.component';
import { LearningCardsNetworkEngineeringComponent } from './network-engineering/learning-cards-network-engineering/learning-cards-network-engineering.component';
import { QuizServerComponent } from './server/quiz-server/quiz-server.component';
import { SummariesServerComponent } from './server/summaries-server/summaries-server.component';
import { LearningCardsServerComponent } from './server/learning-cards-server/learning-cards-server.component';
import {CardboxModule} from '../cardbox/cardbox.module';



@NgModule({
  declarations: [
    SystemIntegrationComponent,
    NetworkEngineeringComponent,
    ServerComponent,
    ConsoleComponent,
    ItSafetyComponent,
    SummariesConsoleComponent,
    QuizConsoleComponent,
    LearningCardsConsoleComponent,
    SummariesItSafetyComponent,
    QuizItSafetyComponent,
    LearningCarsItSafetyComponent,
    SummariesNetworkEngineeringComponent,
    QuizNetworkEngineeringComponent,
    LearningCardsNetworkEngineeringComponent,
    QuizServerComponent,
    SummariesServerComponent,
    LearningCardsServerComponent,
  ],
    imports: [
        CommonModule,
        BusinessAdministrationModule,
        RouterModule,
        CardboxModule
    ]
})
export class SystemIntegrationPartModule { }
