import {combineReducers, createStore} from "redux";
import {inputHandleReducer} from "./inputHandleReducer";
import {renderMoviesReducer} from "./moviesReducer";
import {userReducer} from "./userReducer";
import {handleFriendsReducer} from "./friendsReducer";

const rootReducer = combineReducers({
    inputReducer: inputHandleReducer,
    renderMoviesReducer: renderMoviesReducer,
    friends: handleFriendsReducer,
    userReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)