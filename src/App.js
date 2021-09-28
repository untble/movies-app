import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Authentication from "./pages/authentication/Authentication";
import {useEffect} from "react";
import {auth} from "./firebase";
import {LOGOUT, LOGIN} from "./store/userReducer";
import Profile from "./pages/profilePage/Profile";
import Favourites from "./pages/favouritesMoviesPage/Favourites";

import db from './firebase'
import Communication from "./pages/communication/Communication";

function App() {
    const user = useSelector(state => state.user);
    console.log('User', user)
    const dispatch = useDispatch();


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch({
                    type: LOGIN, payload: {
                        uid: userAuth.uid,
                        email: userAuth.email
                    }
                })
                const userFromFirestore = db.collection('users').doc(userAuth.uid);

                userFromFirestore.get()
                    .then((docSnapshot) => {
                        if(!docSnapshot.exists) {
                            userFromFirestore.set({
                                username: userAuth.email.split('@')[0],
                                email: userAuth.email,
                                favourites: [],
                                friends: []
                            }).then(() => console.log('Success'))
                        }
                    })
            } else {
                dispatch({type: LOGOUT})
            }
            return () => unsubscribe();

        })
    }, [dispatch])


    return (
        <Router>
            {!user? (
                <Authentication/>
            ) : (
                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route exact path='/profile'>
                        <Profile />
                    </Route>
                    <Route exact path='/favourites'>
                        <Favourites />
                    </Route>
                    <Route exact path='/communication'>
                        <Communication />
                    </Route>
                </Switch>
            )}
        </Router>
    );
}

export default connect()(App)
