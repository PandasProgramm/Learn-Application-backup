import {Injectable,EventEmitter} from '@angular/core';
import {LearningCard_I} from '../../models/LearningCard_I';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly learningCards:LearningCard_I[];
  selectedId= new EventEmitter<number>();

  constructor() {
    this.learningCards=this.loadList();
  }

  addLearningCard(item:LearningCard_I):void{
    this.learningCards.push(item);
  }
  removeCard(id:number):void{
    this.learningCards.forEach(card=> card.id===id&&this.learningCards.splice(id,1));
    this.saveList();
  }
  getCard(id:number){
    return this.learningCards[id];
  }
  getAllCards():LearningCard_I[]{
    return this.learningCards;
  }
  filterByCorrectAnswerCount(select:number):LearningCard_I[]{
    const selectedList:LearningCard_I[]=[];
    select===1&&this.learningCards.filter(card=>card.correctAnswerCount<=3&&selectedList.push(card));
    select===2&&this.learningCards.filter(card=>card.correctAnswerCount>3&&card.correctAnswerCount<=6&&selectedList.push(card));
    select===3&&this.learningCards.filter(card=>card.correctAnswerCount>6&&card.correctAnswerCount<=9&&selectedList.push(card));
    select===4&&this.learningCards.filter(card=>card.correctAnswerCount>9&&card.correctAnswerCount<=12&&selectedList.push(card));
    select===5&&this.learningCards.filter(card=>card.correctAnswerCount>12&&selectedList.push(card));
    return selectedList;
  }


  saveList(){
    //TODO:das muss mit http gemacht werden
    alert("speichert!");
  }
  loadList():LearningCard_I[]{
    const dummyArrayCards:string = JSON.stringify(
      [
        {
          "id": "0",
          "key": "analysis",
          "question":"Is this a question?[0]",
          "answer": "Yes it is",
          "correctAnswerCount": "0"
        },
        {
          "id": "1",
          "key": "analysis",
          "question":"Is this a question too?[1]",
          "answer": "Yes it is",
          "correctAnswerCount": "2"
        },
        {
          "id": "2",
          "key": "analysis",
          "question":"Is this a question too?[2]",
          "answer": "Yes it is",
          "correctAnswerCount": "4"
        },
        {
          "id": "3",
          "key": "production",
          "question":"Is this a question too?[3]",
          "answer": "Yes it is",
          "correctAnswerCount": "2"
        },
        {
          "id": "4",
          "key": "production",
          "question":"Is this a question too?[4]",
          "answer": "Yes it is",
          "correctAnswerCount": "2"
        },
        {
          "id": "5",
          "key": "production",
          "question":"Is this a question too?[5]",
          "answer": "Yes it is",
          "correctAnswerCount": "2"
        },
        {
          "id": "6",
          "key": "production",
          "question":"Is this a question too?[6]",
          "answer": "Yes it is",
          "correctAnswerCount": "2"
        },
      ]);
    return JSON.parse(dummyArrayCards);
  }

}
