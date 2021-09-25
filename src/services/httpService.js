import db from '../firebase';
import firebase from "firebase/compat";

export const getCollection = async (collectionPath) => {
    const arr = [];
    const snapshot = await db.collection(collectionPath).get();

    snapshot.forEach((doc) => {
        arr.push({...doc.data(), id: doc.id});
    })
    return arr;
}

export const getDocumentById = async (collectionPath, id) => {
    const snapShot = await db.collection(collectionPath).doc(id).get();
    console.log('SnapShot', {...snapShot.data()})
    return {...snapShot.data(), id};
}

export const getFavouriteMovie = async (collectionPath, movie, id) => {
    return db.collection('users')
        .doc(id)
        .update({
            favourites: firebase.firestore.FieldValue.arrayRemove(movie)
        })
}

export const deleteDocumentById = async (collectionPath, id) => {
    console.log(collectionPath,id);
    return db.collection(collectionPath)
        .doc(id)
        .delete()
}