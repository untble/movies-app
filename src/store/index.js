import {combineReducers, createStore} from "redux";
import {inputHandleReducer} from "./inputHandleReducer";
import {renderMoviesReducer} from "./moviesReducer";

const rootReducer = combineReducers({
    inputReducer: inputHandleReducer,
    renderMoviesReducer: renderMoviesReducer
})

export const store = createStore(rootReducer)