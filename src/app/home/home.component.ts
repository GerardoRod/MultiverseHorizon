
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { logging } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  isSmallScreen = false;

  cards = this.breakpointObserver.observe(['(max-width: 768px)']).pipe(
    map(({ matches }) => {
      if (matches) {
        this.doSomething();
        return [
          { cols: 2, rows: 1 },
        ];
      }
      this.doSomethingElse();
      return [
        { cols: 1, rows: 1  },
      ];
    })
  );



  
  doSomething(){
    this.isSmallScreen = true;
  }

  doSomethingElse(){
    this.isSmallScreen = false;
  }

constructor(private breakpointObserver: BreakpointObserver) {
  

   }




}
