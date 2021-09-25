import {deleteDocumentById, getCollection, getDocumentById, getFavouriteMovie} from "./httpService";

export const getUsers = () => getCollection('users');
export const getUser = (id) => getDocumentById('users', id);

export const removeFavourite = (movie, id) => getFavouriteMovie('users', movie, id);

export const removeFavouriteMovieFromUser = (userId, favouriteId) => deleteDocumentById(`users/${userId}/favourites`, favouriteId);

