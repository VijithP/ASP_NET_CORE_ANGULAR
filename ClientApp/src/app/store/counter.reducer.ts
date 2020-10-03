import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../store/counter.actions';
import {Counter} from '../interfaces/counter.model'


export const initialState:Counter[]=[];
initialState.fill({home:0})

// export const initialState: Counter = {
//   home:0
// };


// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state})),
  on(decrement, (state) =>  ({...state})),
  on(reset, (state) =>  ({...state,home:0}))
);

export function counterReducer(state: Counter[] | undefined, action) {
  debugger;
  return _counterReducer(state, action);
}
