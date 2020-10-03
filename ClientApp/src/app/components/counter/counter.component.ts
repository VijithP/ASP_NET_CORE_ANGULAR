import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset} from '../../store/counter.actions';
 import{Counter} from '../../interfaces/counter.model'
 import{AppState} from '../../store/app.state'

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  count$: Observable<Counter[]>;
 
  constructor(private store: Store<AppState>) {
    //this.count$ = store.select()
    this.count$ = this.store.select((state) => state.counter);
  }
 
  increment() {
    debugger;
    this.store.dispatch(increment());
    debugger;
    //console.log(this.count$.pipe());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
