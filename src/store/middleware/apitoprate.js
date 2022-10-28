
import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Toprate() {
    let [data, setData] = useState([]);




    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setData(data.results))
    }, [])

    return (
        <div className="popu">
            <h1>Film les mieux notés</h1>
            <Swiper

                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={8}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 7,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 8,
                        spaceBetween: 50,
                    },
                }}
            >
                <div className="BoddyPopular">

                    {data.map((post, elements) => (
                        <>
                            <SwiperSlide className="vignette" key={post.id}>
                                <div className="itemHover">
                                    <h2>
                                        {post.title}
                                    </h2>
                                    <p>
                                        {post.overview > 100 ? post.overview : post.overview.slice(0, 100) + "..."}
                                    </p>
                                    <p>
                                        {post.vote_average}<i className='icon-star-filled rate'></i>
                                    </p>
                                    <NavLink to={`/movie/${post.id}`}>
                                        <button className="btn more">Voir plus</button>
                                    </NavLink>
                                </div>
                                <img key={post.id} src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}></img>
                            </SwiperSlide>
                        </>
                    ))
                    }
                </div>
            </Swiper>
        </div >
    );
}

export default Toprate;