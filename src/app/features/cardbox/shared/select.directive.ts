import {Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  @HostBinding('style.box-shadow')box:string;
  @HostListener('mouseenter')attach(){
    this.box= ' -3px 2px 25px 7px #0000FF'
  }
  @HostListener('mouseleave')notAttach(){
    this.box='';
  }
  constructor() {


  }

}
