import { Component } from '@angular/core';

import {
  trigger, 
  animate, 
  style, 
  group, 
  // animateChild, 
  query, 
  // stagger, 
  transition 
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('*<=>*', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query( ':enter', [
        style({ transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional:true})
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],  
})

export class AppComponent { 
  getState(outlet) {
    return outlet.activatedRouteData.state; //distinct property for each route and we're using this property to get at that.
  }
}
