import { AlertAction, AlertActionTypes } from '../types/alert.actions';
import { Alert } from '../types/reducers';

const initialState : Alert[] = [];

export function AlertReducer(state: Alert[] = initialState, action: AlertAction) {
    const { type, payload } = action;
    switch (type) {
        case AlertActionTypes.SET_ALERT:
            return [...state, payload];
        case AlertActionTypes.REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload.id);
        default:
            return state;
    }
}
