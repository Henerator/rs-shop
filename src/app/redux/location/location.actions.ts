import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum LocationActions {
  GetLocation = "Get Location",
  LocationGotSuccess = 'Location Got Success',
  LocationGotError = 'Location Got Error',
}

export const getLocation = createAction( LocationActions.GetLocation );

export const locationGotSuccess = createAction( LocationActions.LocationGotSuccess, 
  props<{ location: string }>());

export const locationGotError = createAction( LocationActions.LocationGotError );