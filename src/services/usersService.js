import {
    deleteDocumentById,
    getCollection,
    getDocumentById,
    removeFavouriteMovie
} from "./httpService";

export const getUsers = () => getCollection('users');
export const getUser = (id) => getDocumentById('users', id);

export const removeFavourite = (movie, id) => removeFavouriteMovie('users', movie, id);
export const getUserFavourites = async (id) => {
    const user = await getUser(id);
    return user.favourites;
}

// export const removeFavouriteMovieFromUser = (userId, favouriteId) => deleteDocumentById(`users/${userId}/favourites`, favouriteId);

