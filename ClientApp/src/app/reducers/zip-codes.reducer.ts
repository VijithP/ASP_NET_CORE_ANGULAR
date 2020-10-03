import { Action, createReducer, on } from '@ngrx/store';


export const zipCodesFeatureKey = 'zipCodes';

export interface State {
ZipCodes:Array<string>
}

export const initialState: State = {
ZipCodes:[]
};


export const reducer = createReducer(
  initialState,

);

