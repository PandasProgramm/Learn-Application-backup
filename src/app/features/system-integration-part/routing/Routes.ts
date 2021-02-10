import {Routes} from '@angular/router';
import {NetworkEngineeringComponent} from '../network-engineering/network-engineering.component';
import {ServerComponent} from '../server/server.component';
import {ItSafetyComponent} from '../it-savety/it-safety.component';
import {ConsoleComponent} from '../console/console.component';
import {SummariesNetworkEngineeringComponent} from '../network-engineering/summaries-network-engineering/summaries-network-engineering.component';
import {LearningCardsNetworkEngineeringComponent} from '../network-engineering/learning-cards-network-engineering/learning-cards-network-engineering.component';
import {QuizNetworkEngineeringComponent} from '../network-engineering/quiz-network-engineering/quiz-network-engineering.component';
import {SummariesServerComponent} from '../server/summaries-server/summaries-server.component';
import {LearningCardsServerComponent} from '../server/learning-cards-server/learning-cards-server.component';
import {QuizServerComponent} from '../server/quiz-server/quiz-server.component';
import {SummariesItSafetyComponent} from '../it-savety/summaries-it-safety/summaries-it-safety.component';
import {LearningCarsItSafetyComponent} from '../it-savety/learning-cars-it-safety/learning-cars-it-safety.component';
import {QuizItSafetyComponent} from '../it-savety/quiz-it-safety/quiz-it-safety.component';
import {SummariesConsoleComponent} from '../console/summaries-console/summaries-console.component';
import {LearningCardsConsoleComponent} from '../console/learning-cards-console/learning-cards-console.component';
import {QuizConsoleComponent} from '../console/quiz-console/quiz-console.component';


export const SYSTEM_INTEGRATION_ROUTES:Routes=[
  {
    path:'network-engineering',
    component: NetworkEngineeringComponent,
    children:[
      {
        path:'summaries',
        component: SummariesNetworkEngineeringComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsNetworkEngineeringComponent
      },
      {
        path:'quiz',
        component: QuizNetworkEngineeringComponent
      },
    ]
  },
  {
    path:'server',
    component: ServerComponent,
    children:[
      {
        path:'summaries',
        component: SummariesServerComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsServerComponent
      },
      {
        path:'quiz',
        component: QuizServerComponent
      },
    ]
  },
  {
    path:'safety',
    component: ItSafetyComponent,
    children:[
      {
        path:'summaries',
        component: SummariesItSafetyComponent
      },
      {
        path:'learning-cards',
        component: LearningCarsItSafetyComponent
      },
      {
        path:'quiz',
        component: QuizItSafetyComponent
      },
    ]
  },
  {
    path: 'console',
    component:ConsoleComponent,
    children:[
      {
        path:'summaries',
        component: SummariesConsoleComponent
      },
      {
        path:'learning-cards',
        component: LearningCardsConsoleComponent
      },
      {
        path:'quiz',
        component: QuizConsoleComponent
      },
    ]
  },
]
