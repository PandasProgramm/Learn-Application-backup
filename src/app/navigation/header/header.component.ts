import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toBusinessAdministration() {
   this.router.navigate(['/business-administration'])
  }

  toCommonPart() {
    this.router.navigate(['/common-part'])
  }

  toReview() {
    this.router.navigate(['/review'])
  }

  toSystemIntegrationPart() {
    this.router.navigate(['/system-integration'])
  }

  toDevelopmentPart() {
    this.router.navigate(['/development'])
  }
}
