import  {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';


@Directive({
  selector: '[appSinglePageCompaction]'
})
export class SinglePageCompactionDirective {

  @Input('appSinglePageCompaction')set select(condition:boolean){
    condition?this.viewContainerRef.createEmbeddedView(this.selected):this.viewContainerRef.clear();
  }
  constructor(private router:Router,private selected:TemplateRef<any>,private viewContainerRef:ViewContainerRef) {
    router.events.subscribe((event:NavigationStart)=>{
      event.navigationTrigger==='popstate'&&this.router.navigate(['/development']);
    });
  }
}
