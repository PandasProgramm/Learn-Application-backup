import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buisness-administration',
  templateUrl: './buisness-administration.component.html',
  styleUrls: ['./buisness-administration.component.scss']
})
export class BuisnessAdministrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
