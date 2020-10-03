import { createAction, props } from '@ngrx/store';

export const loadZipCodess = createAction(
  '[ZipCodes] Load ZipCodess'
);

export const loadZipCodessSuccess = createAction(
  '[ZipCodes] Load ZipCodess Success',
  props<{ data: any }>()
);

export const loadZipCodessFailure = createAction(
  '[ZipCodes] Load ZipCodess Failure',
  props<{ error: any }>()
);
