import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/login/Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {LOGOUT, LOGIN} from "./store/userReducer";


function App() {
    const user = useSelector(state => state.userReducer);
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
            } else {
                dispatch({type: LOGOUT})
            }
            console.log('useEffect', userAuth?.email, userAuth?.uid)

        })
    }, [dispatch])

    console.log('User ' + user.user)

    return (
        <Router>
            {!user.user ? (
                <Login/>
            ) : (
                <Switch>
                    <Route exact path='/'>
                        <HomeScreen/>
                    </Route>
                </Switch>
            )}
        </Router>
    );
}

export default connect()(App)
