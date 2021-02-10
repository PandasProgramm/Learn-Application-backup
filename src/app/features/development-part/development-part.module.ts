import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApplicationDevelopmentComponent} from './application-development/application-development.component';
import {BusinessAdministrationModule} from '../business-administration/business-administration.module';
import { SoftwareProductionComponent } from './software-production/software-production.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { JavaComponent } from './java/java.component';
import { DatabasesComponent } from './databases/databases.component';
import { WebApplicationsComponent } from './web-applications/web-applications.component';
import { TestingComponent } from './testing/testing.component';
import { SoftwareDocumentationComponent } from './software-documentation/software-documentation.component';
import { RoutineOperationComponent } from './routine-operation/routine-operation.component';
import { SqlComponent } from './sql/sql.component';
import {RouterModule} from '@angular/router';
import { SinglePageCompactionDirective } from './shared/directives/single-page-compaction.directive';
import { SummarysSoftwareProductionComponent } from './software-production/summarys-software-production/summarys-software-production.component';
import { LearningCardsSoftwareProductionComponent } from './software-production/learning-cards-software-production/learning-cards-software-production.component';
import { QuizSoftwareProductionComponent } from './software-production/quiz-software-production/quiz-software-production.component';
import { SummariesAnalysisComponent } from './analysis/summaries-analysis/summaries-analysis.component';
import { LearningCardsAnalysisComponent } from './analysis/learning-cards-analysis/learning-cards-analysis.component';
import { QuizAnalysisComponent } from './analysis/quiz-analysis/quiz-analysis.component';
import { SummariesToolsComponent } from './equipment/summaries-tools/summaries-tools.component';
import { LearningCardsToolsComponent } from './equipment/learning-cards-tools/learning-cards-tools.component';
import { QuizToolsComponent } from './equipment/quiz-tools/quiz-tools.component';
import { SummariesJavaComponent } from './java/summaries-java/summaries-java.component';
import { LearningCardsJavaComponent } from './java/learning-cards-java/learning-cards-java.component';
import { QuizJavaComponent } from './java/quiz-java/quiz-java.component';
import { SummariesDatabasesComponent } from './databases/summaries-databases/summaries-databases.component';
import { LearningCardsDatabasesComponent } from './databases/learning-cards-databases/learning-cards-databases.component';
import { QuizDatabasesComponent } from './databases/quiz-databases/quiz-databases.component';
import { SummariesWebAppComponent } from './web-applications/summaries-web-app/summaries-web-app.component';
import { LearningCardsWebAppComponent } from './web-applications/learning-cards-web-app/learning-cards-web-app.component';
import { QuizWebAppComponent } from './web-applications/quiz-web-app/quiz-web-app.component';
import { SummariesTestingComponent } from './testing/summaries-testing/summaries-testing.component';
import { LearningCardsTestingComponent } from './testing/learning-cards-testing/learning-cards-testing.component';
import { QuizTestingComponent } from './testing/quiz-testing/quiz-testing.component';
import { SummariesDocumentationComponent } from './software-documentation/summaries-documentation/summaries-documentation.component';
import { LearningCardsDocumentationComponent } from './software-documentation/learning-cards-documentation/learning-cards-documentation.component';
import { QuizDocumentationComponent } from './software-documentation/quiz-documentation/quiz-documentation.component';
import { SummariesRoutineOperationComponent } from './routine-operation/summaries-routine-operation/summaries-routine-operation.component';
import { LearningCardsRoutineOperationComponent } from './routine-operation/learning-cards-routine-operation/learning-cards-routine-operation.component';
import { QuizRoutineOperationComponent } from './routine-operation/quiz-routine-operation/quiz-routine-operation.component';
import { SummariesSqlComponent } from './sql/summaries-sql/summaries-sql.component';
import { LearningCardsSqlComponent } from './sql/learning-cards-sql/learning-cards-sql.component';
import { QuizSqlComponent } from './sql/quiz-sql/quiz-sql.component';
import {CardboxModule} from '../cardbox/cardbox.module';
import {LearningCardComponent} from '../cardbox/learning-card/learning-card.component';
import {NavigationModule} from '../../navigation/navigation.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ApplicationDevelopmentComponent,
    SoftwareProductionComponent,
    AnalysisComponent,
    EquipmentComponent,
    JavaComponent,
    DatabasesComponent,
    WebApplicationsComponent,
    TestingComponent,
    SoftwareDocumentationComponent,
    RoutineOperationComponent,
    SqlComponent,
    SinglePageCompactionDirective,
    SummarysSoftwareProductionComponent,
    LearningCardsSoftwareProductionComponent,
    QuizSoftwareProductionComponent,
    SummariesAnalysisComponent,
    LearningCardsAnalysisComponent,
    QuizAnalysisComponent,
    SummariesToolsComponent,
    LearningCardsToolsComponent,
    QuizToolsComponent,
    SummariesJavaComponent,
    LearningCardsJavaComponent,
    QuizJavaComponent,
    SummariesDatabasesComponent,
    LearningCardsDatabasesComponent,
    QuizDatabasesComponent,
    SummariesWebAppComponent,
    LearningCardsWebAppComponent,
    QuizWebAppComponent,
    SummariesTestingComponent,
    LearningCardsTestingComponent,
    QuizTestingComponent,
    SummariesDocumentationComponent,
    LearningCardsDocumentationComponent,
    QuizDocumentationComponent,
    SummariesRoutineOperationComponent,
    LearningCardsRoutineOperationComponent,
    QuizRoutineOperationComponent,
    SummariesSqlComponent,
    LearningCardsSqlComponent,
    QuizSqlComponent,

  ],
  exports: [

  ],
    imports: [
        CommonModule,
        BusinessAdministrationModule,
        RouterModule,
        CardboxModule,
        NavigationModule,
        FormsModule,
        BrowserAnimationsModule
    ]
})
export class DevelopmentPartModule { }
