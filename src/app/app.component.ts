import { Component ,ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import { testDirective } from './test.directive';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit 
{
  name = 'Angular';

  @ViewChildren(testDirective) testd:QueryList<testDirective>;

  ngAfterViewInit()
  {
    console.log(this.testd);
  }
}
