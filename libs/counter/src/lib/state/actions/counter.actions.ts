import { createActionGroup, emptyProps } from '@ngrx/store';

export const CountEvents = createActionGroup({
  source: 'counter count events',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
  },
});
