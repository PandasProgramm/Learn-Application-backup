import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {userRouting} from './navigation/routing/routing';
import {ReactiveFormsModule} from '@angular/forms';
import {BusinessAdministrationModule} from './features/business-administration/business-administration.module';
import {DevelopmentPartModule} from './features/development-part/development-part.module';
import {SystemIntegrationPartModule} from './features/system-integration-part/system-integration-part.module';
import {NavigationModule} from './navigation/navigation.module';
import {CommonPartModule} from './features/common-part/common-part/common-part.module';
import { QuizCrossLinkedSystemsComponent } from './features/common-part/cross-linked-systems/quiz-cross-linked-systems/quiz-cross-linked-systems.component';
import { LearningCardsCrossLinkedSystemsComponent } from './features/common-part/cross-linked-systems/learning-cards-cross-linked-systems/learning-cards-cross-linked-systems.component';
import { SummariesCrossLinkedSystemsComponent } from './features/common-part/cross-linked-systems/summaries-cross-linked-systems/summaries-cross-linked-systems.component';
import { QuizPublicNetworkComponent } from './features/common-part/public-network/quiz-public-network/quiz-public-network.component';
import { LearningCardsPublicNetworkComponent } from './features/common-part/public-network/learning-cards-public-network/learning-cards-public-network.component';
import { SummariesPublicNetworkComponent } from './features/common-part/public-network/summaries-public-network/summaries-public-network.component';
import { QuizSymplifiedItSystemsComponent } from './features/common-part/symplified-it-systems/quiz-symplified-it-systems/quiz-symplified-it-systems.component';
import { LearningCardsSymplifiedSystemsComponent } from './features/common-part/symplified-it-systems/learning-cards-symplified-systems/learning-cards-symplified-systems.component';
import { SummariesSymplifiedSystemsComponent } from './features/common-part/symplified-it-systems/summaries-symplified-systems/summaries-symplified-systems.component';
import { QuizSystemAdministrationComponent } from './features/common-part/system-administration/quiz-system-administration/quiz-system-administration.component';
import { LearningCardsSystemAdministrationComponent } from './features/common-part/system-administration/learning-cards-system-administration/learning-cards-system-administration.component';
import { SummariesSystemAdministrationComponent } from './features/common-part/system-administration/summaries-system-administration/summaries-system-administration.component';
import {CardboxModule} from './features/cardbox/cardbox.module';


@NgModule({
    declarations: [
        AppComponent,
        QuizCrossLinkedSystemsComponent,
        LearningCardsCrossLinkedSystemsComponent,
        SummariesCrossLinkedSystemsComponent,
        QuizPublicNetworkComponent,
        LearningCardsPublicNetworkComponent,
        SummariesPublicNetworkComponent,
        QuizSymplifiedItSystemsComponent,
        LearningCardsSymplifiedSystemsComponent,
        SummariesSymplifiedSystemsComponent,
        QuizSystemAdministrationComponent,
        LearningCardsSystemAdministrationComponent,
        SummariesSystemAdministrationComponent,
    ],
  imports: [
    BrowserModule,
    userRouting,
    ReactiveFormsModule,
    BusinessAdministrationModule,
    DevelopmentPartModule,
    SystemIntegrationPartModule,
    NavigationModule,
    CommonPartModule,
    CardboxModule,

  ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
