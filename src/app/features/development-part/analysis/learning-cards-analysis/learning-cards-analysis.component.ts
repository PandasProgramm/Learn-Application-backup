import {Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {KEYS, LearningCard_I} from '../../../models/LearningCard_I';
import {animate, style, transition, trigger} from '@angular/animations';
import {CardService} from '../../../cardbox/shared/card.service';


@Component({
  selector: 'app-learning-cards-analysis',
  templateUrl: './learning-cards-analysis.component.html',
  styleUrls: ['./learning-cards-analysis.component.scss'],
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
export class LearningCardsAnalysisComponent implements OnInit,DoCheck,OnDestroy {

  cards:LearningCard_I[]=[];
  @Input()selectedId:number;


  constructor(private service:CardService) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
   this.cards=this.cards.filter(card=>card.key===KEYS.ANALYSIS);

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
