export const RENDER_MOVIES = 'RENDER_MOVIES';

const defaultState = [];

export const renderMoviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RENDER_MOVIES: {
            return [...state, action.payload]
        }
        default:
            return state
    }
}