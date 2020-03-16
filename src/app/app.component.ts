import { Component ,ViewChild, QueryList, AfterViewInit,Renderer2} from '@angular/core';
import { testDirective } from './test.directive';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit 
{
  name = 'Angular';
  element:any;
  element2:any;
  @ViewChild(testDirective,{static:true}) testd:testDirective;

  constructor(private r:Renderer2)
  {}
  ngAfterViewInit()
  {
    console.log(this.testd);
  }

  add(event)
  {
    const element = this.r.createElement('div');
    this.r.addClass(element,'new');
    this.r.setAttribute(element,'id','1');
    this.element=element;
    this.r.appendChild(this.testd.el.nativeElement,element);
    console.log(this.testd.el.nativeElement);
    console.log(element);

    const element2 = this.r.createElement('div');
    this.r.addClass(element2,'new');
    this.r.setAttribute(element2,'id','2');
    this.element2=element2;
    this.r.appendChild(this.testd.el.nativeElement,element2);
  }

  remove(event)
  {
    console.log(' In Remove');
    console.log(this.testd.el.nativeElement);
    this.r.removeChild(this.testd.el.nativeElement,this.element);
  }

  update(event)
  {
    this.r.setAttribute(this.element,'some','other');
  }
}
