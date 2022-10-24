import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/posts";
import { useEffect } from "react";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);
    const ApiFetch = []
    ApiFetch.push(posts)
    let PopularMovie = posts.results
    console.log(PopularMovie)

    if (PopularMovie == undefined) {
        PopularMovie = [{ title: "test" }]
    }
    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);

    return (
        <div className="popu">
            <h1>Popular</h1>
            <Swiper

                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={6}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div className="BoddyPopular">

                    {PopularMovie.map((post) => (
                        <>
                            <SwiperSlide>
                                <div className="Popular">

                                    <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}></img>
                                </div>

                            </SwiperSlide>
                        </>
                    ))
                    }
                </div>
            </Swiper>

        </div >
    );
};

export default Posts;