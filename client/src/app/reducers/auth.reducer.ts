import { AuthAction, AuthActionTypes } from '../types/auth.actions';
import { Auth } from '../types/reducers';

const initialState : Auth = {
    isAuthenticated: false,
    loaded: false,
    user: null
}

export function AuthReducer(state: Auth = initialState, action: AuthAction) {
    const { type, payload } = action;
    switch (type) {
        case AuthActionTypes.LOAD_USER_VALID:
            return {
                isAuthenticated: true,
                loaded: true,
                user: payload
            }
        case AuthActionTypes.LOAD_USER_INVALID:
            return {
                isAuthenticated: false,
                loaded: true,
                user: null
            }
        default:
            return state;
    }
}
