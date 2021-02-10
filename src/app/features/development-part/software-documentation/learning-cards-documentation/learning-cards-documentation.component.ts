import {Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {KEYS, LearningCard_I} from '../../../models/LearningCard_I';
import {CardService} from '../../../cardbox/shared/card.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-learning-cards-documentation',
  templateUrl: './learning-cards-documentation.component.html',
  styleUrls: ['./learning-cards-documentation.component.scss'],
  animations:[
    trigger('fade',[
        transition(':enter',[
          style({opacity:0, transform: 'translate(0,0)'}),
          animate('500ms', style({opacity:1,transform: 'translate(0,-50px)'}))
        ]),
        transition(':leave',[
          style({opacity: 1, transform:'translate(0, 0)'}),
          animate('500ms',style({opacity:0, transform: 'translate( 300px,0)'}))
        ])
      ]
    )],
})
export class LearningCardsDocumentationComponent implements OnInit,DoCheck,OnDestroy {

  cards:LearningCard_I[]=[];
  @Input()selectedId:number;


  constructor(private service:CardService) { }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.cards=this.cards.filter(card=>card.key===KEYS.DOCUMENTATION);

    if(this.cards!==undefined&&this.selectedId===undefined)
    {
      this.selectedId=0
    }
    if(this?.cards[this?.selectedId] === undefined) {
      this.cards = [];
      this.selectedId = undefined;
    }
  }
  ngOnDestroy() {
    this.service.saveList()
  }

}
