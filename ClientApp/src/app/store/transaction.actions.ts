import { createAction, props } from '@ngrx/store';
export const homescore = createAction(
  '[Transaction] home score'
);

export const awayscore = createAction(
  '[Transaction] away score'
);

export const resetscore = createAction(
  '[Transaction] reset score'
);

export const setscore = createAction(
  '[Transaction] set score',
  props<{game:any}>()
);



// export const loadTransactions = createAction(
//   '[Transaction] Load Transactions'
// );

// export const loadTransactionsSuccess = createAction(
//   '[Transaction] Load Transactions Success',
//   props<{ data: any }>()
// );

// export const loadTransactionsFailure = createAction(
//   '[Transaction] Load Transactions Failure',
//   props<{ error: any }>()
// );
