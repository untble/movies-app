export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const defaultState = {
    user: null
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN: return action.payload
        case LOGOUT: return null
        default: return state
    }
}