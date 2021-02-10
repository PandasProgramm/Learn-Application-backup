import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appBtnListener]'
})
export class BtnListenerDirective {

  @HostBinding('style.box-shadow')borderColor:string;
  @HostListener('mouseenter')select(){
    this.borderColor='-3px 2px 25px 8px #b0e2ff'
  }
  @HostListener('mouseleave')unselect(){
    this.borderColor=''
  }

  constructor() { }

}
