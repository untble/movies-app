export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const SET_FRIENDS = 'SET_FRIENDS';

const defaultState = [];

export const handleFriendsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return action.payload;
        }
        case ADD_FRIEND: {
            return [...state, action.payload]
        }
        case REMOVE_FRIEND: {
            return state.filter(friend => action.payload.id !== friend.id);
        }
        default:
            return state
    }
}