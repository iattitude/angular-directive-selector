import {Directive,ElementRef} from '@angular/core';

@Directive({
selector : '.test'
})

export class testDirective{
  constructor(public el:ElementRef)
  {
    console.log(el);
  }
}
