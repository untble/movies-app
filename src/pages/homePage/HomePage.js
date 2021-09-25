import React from 'react';
import Header from "../../components/header/Header";
import Movies from "../../components/movies/Movies";
import Filters from "../../components/filters/Filters";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <Header/>
            <Filters/>
            <Movies/>
        </div>
    );
};

export default HomePage;