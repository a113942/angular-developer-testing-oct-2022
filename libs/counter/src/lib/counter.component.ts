import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentCount } from './state';
import { CountEvents } from './state/actions/counter.actions';

@Component({
  selector: 'ht-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  current$ = this.store.select(selectCurrentCount);

  constructor(private store: Store) {}
  increment() {
    this.store.dispatch(CountEvents.increment());
  }

  decrement() {
    this.store.dispatch(CountEvents.decrement());
  }
}
