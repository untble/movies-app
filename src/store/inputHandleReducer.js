export const INPUT_MOVIE = 'INPUT_MOVIE';

const defaultState = '';

export const inputHandleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INPUT_MOVIE: {
            return action.payload
        }
        default:
            return state
    }
}