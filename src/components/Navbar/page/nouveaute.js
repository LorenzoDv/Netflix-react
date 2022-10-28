
import Navbar from "../Navbar";

import "../css/Navbar.css";
import React, { useState } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Serielatest from '../../../store/middleware/latestserie'
import Movielatest from '../../../store/middleware/latestmovie'


const News = () => {


    return (
        <>

            <Navbar />
            <Serielatest />
            <Movielatest />
        </>


    )
};

export default News