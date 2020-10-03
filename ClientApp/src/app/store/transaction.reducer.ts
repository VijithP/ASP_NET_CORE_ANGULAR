import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as transactionActions from '../store/transaction.actions';
export const transactionFeatureKey = 'transaction';

//export const scoreboardFeatureKey = 'game';

export interface State {
home:number,
away:number
}

export const initialState: State = {
home:0,
away:0
};


export const transactionreducer = createReducer(
  initialState,
  on(transactionActions.homescore,state=>({
    ...state,home:state.home+1
  })),
  on(transactionActions.awayscore,state=>({
    ...state,away:state.away+1
  })),
  on(transactionActions.resetscore,state=>({
    ...state,home:0,away:0
  })),
  on(transactionActions.setscore, (state, { game }) => ({
     home: game.home, away: game.away 
  }))
);

export function reducer(state: State | undefined, action: Action) {
  debugger;
  return transactionreducer(state, action);
}