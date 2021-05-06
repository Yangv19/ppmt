import { Action } from '@ngrx/store';
import { Alert } from './reducers'

export enum AlertActionTypes {
    SET_ALERT = '[ALERT] SET_ALERT',
    REMOVE_ALERT = '[ALERT] REMOVE_ALERT'
}

export class SetAlertAction implements Action {
    readonly type = AlertActionTypes.SET_ALERT;

    constructor(public payload : Alert) {}
}

export class RemoveAlertAction implements Action {
    readonly type = AlertActionTypes.REMOVE_ALERT;

    constructor(public payload : Alert) {}
}

export type AlertAction =  SetAlertAction | RemoveAlertAction;
