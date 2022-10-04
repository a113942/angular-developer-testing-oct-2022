import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ht-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  current = 0;

  increment() {
    this.current++;
  }

  decrement() {
    this.current--;
  }
}
