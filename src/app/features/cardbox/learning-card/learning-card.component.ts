import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LearningCard_I} from '../../models/LearningCard_I';
import {CardService} from '../shared/card.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.scss'],
})
export class LearningCardComponent implements OnInit{

  @Input()cardItemId:number;
  @Input()card: LearningCard_I;
  @Output()selectedIdOutput= new EventEmitter<number>()
  selectedId:number=0;
  showAnswer: boolean=false;


  constructor() { }

  ngOnInit(): void {

  }


  onSuccess(event:Event) {
    ++this.card.correctAnswerCount
    this.selectedIdOutput.emit(++this.selectedId);
  }
  onFail(event:Event){
    --this.card.correctAnswerCount;
    this.selectedIdOutput.emit(++this.selectedId);
  }
}
