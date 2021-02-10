import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectDirective} from './shared/select.directive';
import { CardListsComponent } from './card-lists/card-lists.component';
import {LearningCardComponent} from './learning-card/learning-card.component';
import {FormsModule} from '@angular/forms';





@NgModule({
  declarations: [SelectDirective, CardListsComponent,LearningCardComponent],
  exports: [
    SelectDirective,
    CardListsComponent,
    LearningCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class CardboxModule { }
