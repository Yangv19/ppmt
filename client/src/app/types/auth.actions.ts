import { Action } from '@ngrx/store';
import { User } from './reducers';

export enum AuthActionTypes {
    LOAD_USER_VALID = '[AUTH] LOAD_USER_VALID',
    LOAD_USER_INVALID = '[AUTH] LOAD_USER_INVALID',
    RESET_AUTH = '[AUTH] RESET_AUTH'
}

export class LoadUserValidAction implements Action {
    readonly type = AuthActionTypes.LOAD_USER_VALID;

    constructor(public payload : User) {}
}

export class LoadUserInvalidAction implements Action {
    readonly type = AuthActionTypes.LOAD_USER_INVALID;

    constructor(public payload : object = null) {}
}

export type AuthAction =  LoadUserValidAction | LoadUserInvalidAction;
