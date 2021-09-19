import {Fragment} from "react";
import './App.css';
import Movies from "./components/movies/Movies";
import Header from "./components/header/Header";
import {connect} from "react-redux";


function App() {
  return (
      <Fragment>
          <Header />
          <Movies />
      </Fragment>
  );
}

export default connect()(App)
