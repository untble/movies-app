import React from 'react';
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Movies from "../../components/movies/Movies";
import Filters from "../../components/filters/Filters";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <HomeHeader/>
            <Filters/>
            <Movies/>
        </div>
    );
};

export default HomePage;