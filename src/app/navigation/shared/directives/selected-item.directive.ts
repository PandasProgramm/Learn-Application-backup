import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appSelectedItem]'
})
export class SelectedItemDirective {

  @HostBinding('style.box-shadow')box:string;

  @HostListener('mouseenter')attach(){
    this.box= ' -3px 2px 25px 16px #000000'
  }
  @HostListener('mouseleave')notAttach(){
    this.box='';
  }
  constructor() { }

}
