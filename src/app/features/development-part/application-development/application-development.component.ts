import {Component,  OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application-development',
  templateUrl: './application-development.component.html',
  styleUrls: ['./application-development.component.scss']
})
export class ApplicationDevelopmentComponent implements OnInit {


  private PATH:string='/development';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  isActive(){
    return this.PATH===this.router.url
  }
}
