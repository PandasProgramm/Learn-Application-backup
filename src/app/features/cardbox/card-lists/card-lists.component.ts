import {Component, Input, OnInit, Output, EventEmitter, DoCheck} from '@angular/core';
import {LearningCard_I} from '../../models/LearningCard_I';
import {CardService} from '../shared/card.service';

@Component({
  selector: 'app-card-lists',
  templateUrl: './card-lists.component.html',
  styleUrls: ['./card-lists.component.scss']
})
export class CardListsComponent implements OnInit{

  @Output()selectedList= new EventEmitter<LearningCard_I[]>();

  selectInfo:boolean=false;
  cards:LearningCard_I[];

  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.cards= this.cardService.getAllCards();
  }
  onInfoClick(){
    this.selectInfo=!this.selectInfo;
  }
  switchToList(lvl:number){
    this.cards= this.cardService.filterByCorrectAnswerCount(lvl);
    this.selectedList.emit(this.cards);
  }

  onNewCardClick() {
    alert("noch nicht bereit!")
  }
}
