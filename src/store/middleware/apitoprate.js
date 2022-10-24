
import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Toprate() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}`,
            );
            const json = await res.json();
            setData(json.results);
        };
        fetchData();
    });

    return (
        <div className="popu">
            <h1>Top rated</h1>
            <Swiper

                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={8}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div className="BoddyPopular">

                    {data.map((post, elements) => (
                        <>
                            <SwiperSlide key={elements}>
                                <div className="Popular" key={elements}>

                                    <img key={elements} src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}></img>
                                </div>

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