import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
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
            return () => unsubscribe();

        })
    }, [dispatch])



    return (
        <Router>
            {!user.user ? (
                <Login/>
            ) : (
                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                </Switch>
            )}
        </Router>
    );
}

export default connect()(App)
