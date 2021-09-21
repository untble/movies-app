export const RENDER_MOVIES = 'ALL_MOVIES';


const defaultState = [];

export const renderMoviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RENDER_MOVIES: {
            return [action.payload]
        }

        default:
            return state
    }
}