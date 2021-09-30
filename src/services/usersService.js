import {
    addFavouriteMovie,
    getCollection,
    getDocumentById,
    removeFavouriteMovie,
    addUserToFriends, removeUserFromFriends,changeEmailByID
} from "./httpService";

export const getUsers = () => getCollection('users');
export const getUser = (id) => getDocumentById('users', id);

export const removeFavourite = (movie, id) => removeFavouriteMovie('users', movie, id);
export const addFavourite = (movie, id) => addFavouriteMovie('users', movie, id);

export const followUser = (user, id) => addUserToFriends('users', user, id);
export const unfollowUser = (user, id) => removeUserFromFriends('users', user, id);

export const getUserFavourites = async (id) => {
    const user = await getUser(id);
    return user.favourites;
}

export const changeEmail = (email, id) => changeEmailByID('users', email, id);



