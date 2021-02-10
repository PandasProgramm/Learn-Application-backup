import {Routes} from '@angular/router';
import {SoftwareProductionComponent} from '../software-production/software-production.component';
import {AnalysisComponent} from '../analysis/analysis.component';
import {EquipmentComponent} from '../equipment/equipment.component';
import {JavaComponent} from '../java/java.component';
import {DatabasesComponent} from '../databases/databases.component';
import {WebApplicationsComponent} from '../web-applications/web-applications.component';
import {TestingComponent} from '../testing/testing.component';
import {SoftwareDocumentationComponent} from '../software-documentation/software-documentation.component';
import {RoutineOperationComponent} from '../routine-operation/routine-operation.component';
import {SqlComponent} from '../sql/sql.component';
import {SummarysSoftwareProductionComponent} from '../software-production/summarys-software-production/summarys-software-production.component';
import {LearningCardsSoftwareProductionComponent} from '../software-production/learning-cards-software-production/learning-cards-software-production.component';
import {QuizSoftwareProductionComponent} from '../software-production/quiz-software-production/quiz-software-production.component';
import {SummariesAnalysisComponent} from '../analysis/summaries-analysis/summaries-analysis.component';
import {LearningCardsAnalysisComponent} from '../analysis/learning-cards-analysis/learning-cards-analysis.component';
import {QuizAnalysisComponent} from '../analysis/quiz-analysis/quiz-analysis.component';
import {SummariesToolsComponent} from '../equipment/summaries-tools/summaries-tools.component';
import {LearningCardsToolsComponent} from '../equipment/learning-cards-tools/learning-cards-tools.component';
import {QuizToolsComponent} from '../equipment/quiz-tools/quiz-tools.component';
import {SummariesJavaComponent} from '../java/summaries-java/summaries-java.component';
import {LearningCardsJavaComponent} from '../java/learning-cards-java/learning-cards-java.component';
import {QuizJavaComponent} from '../java/quiz-java/quiz-java.component';
import {SummariesDatabasesComponent} from '../databases/summaries-databases/summaries-databases.component';
import {LearningCardsDatabasesComponent} from '../databases/learning-cards-databases/learning-cards-databases.component';
import {QuizDatabasesComponent} from '../databases/quiz-databases/quiz-databases.component';
import {SummariesWebAppComponent} from '../web-applications/summaries-web-app/summaries-web-app.component';
import {LearningCardsWebAppComponent} from '../web-applications/learning-cards-web-app/learning-cards-web-app.component';
import {QuizWebAppComponent} from '../web-applications/quiz-web-app/quiz-web-app.component';
import {SummariesTestingComponent} from '../testing/summaries-testing/summaries-testing.component';
import {LearningCardsTestingComponent} from '../testing/learning-cards-testing/learning-cards-testing.component';
import {QuizTestingComponent} from '../testing/quiz-testing/quiz-testing.component';
import {SummariesDocumentationComponent} from '../software-documentation/summaries-documentation/summaries-documentation.component';
import {LearningCardsDocumentationComponent} from '../software-documentation/learning-cards-documentation/learning-cards-documentation.component';
import {QuizDocumentationComponent} from '../software-documentation/quiz-documentation/quiz-documentation.component';
import {SummariesRoutineOperationComponent} from '../routine-operation/summaries-routine-operation/summaries-routine-operation.component';
import {LearningCardsRoutineOperationComponent} from '../routine-operation/learning-cards-routine-operation/learning-cards-routine-operation.component';
import {QuizRoutineOperationComponent} from '../routine-operation/quiz-routine-operation/quiz-routine-operation.component';
import {SummariesSqlComponent} from '../sql/summaries-sql/summaries-sql.component';
import {LearningCardsSqlComponent} from '../sql/learning-cards-sql/learning-cards-sql.component';
import {QuizSqlComponent} from '../sql/quiz-sql/quiz-sql.component';


export const DEVELOPMENT_ROUTES:Routes=[
  {
    path:'production',
    component: SoftwareProductionComponent,
    children:[
      {
        path: 'summaries',
        component: SummarysSoftwareProductionComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsSoftwareProductionComponent
      },
      {
        path: 'quiz',
      component: QuizSoftwareProductionComponent
      },
    ]
  },
  {
    path:'analysis',
    component: AnalysisComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesAnalysisComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsAnalysisComponent
      },
      {
        path:'quiz',
        component: QuizAnalysisComponent
      },
    ]
  },
  {
    path:'equipment',
    component:EquipmentComponent,
    children:[
      {
        path:'summaries',
        component: SummariesToolsComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsToolsComponent
      },
      {
        path:'quiz',
        component: QuizToolsComponent
      },
    ]
  },
  {
    path:'java',
    component: JavaComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesJavaComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsJavaComponent
      },
      {
        path:'quiz',
        component: QuizJavaComponent
      },
    ]
  },
  {
    path:'databases',
    component:DatabasesComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesDatabasesComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsDatabasesComponent
      },
      {
        path: 'quiz',
        component: QuizDatabasesComponent
      },
    ]
  },
  {
    path:'web',
    component:WebApplicationsComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesWebAppComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsWebAppComponent
      },
      {
        path: 'quiz',
        component: QuizWebAppComponent
      },
    ]
  },
  {
    path:'testing',
    component: TestingComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesTestingComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsTestingComponent
      },
      {
        path: 'quiz',
        component: QuizTestingComponent
      },
    ]
  },
  {
    path:'documentation',
    component: SoftwareDocumentationComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesDocumentationComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsDocumentationComponent
      },
      {
        path: 'quiz',
        component: QuizDocumentationComponent
      },
    ]
  },
  {
    path:'routine-operations',
    component: RoutineOperationComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesRoutineOperationComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsRoutineOperationComponent
      },
      {
        path: 'quiz',
        component: QuizRoutineOperationComponent
      },
    ]
  },
  {
    path: 'sql',
    component:SqlComponent,
    children:[
      {
        path: 'summaries',
        component: SummariesSqlComponent
      },
      {
        path: 'learning-cards',
        component: LearningCardsSqlComponent
      },
      {
        path:'quiz',
        component: QuizSqlComponent
      },
    ]
  },
]
