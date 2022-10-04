import { Observable, of, tap } from 'rxjs';
describe('basic structure for testing a method or function that returns an observable', () => {
  it('testing the sendToServer', (done) => {
    sendToServer({ message: 'Lunch Time', priority: 'HIGH' })
      .pipe(
        tap((response) => expect(response).toEqual('Done!')),
        tap(() => done())
      )
      .subscribe();
  });
});

function sendToServer(log: {
  message: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}): Observable<string> {
  // do the theing...
  return of('Done!');
}
