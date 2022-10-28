import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/posts";
import { useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import Toprate from "../store/middleware/apitoprate";
import SerieToprate from "../store/middleware/serietoprate"
import Navbar from "../components/Navbar/Navbar";
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


    if (PopularMovie == undefined) {
        PopularMovie = [{ title: "test" }]
    }
    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className="popu">

                <h1>Les plus gros succéss sur Netflix</h1>
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


                        {PopularMovie.map((post, elements) => (
                            <>
                                <SwiperSlide className="vignette" key={post.id}>
                                    <div className="itemHover">
                                        <h2>
                                            {post.title}
                                        </h2>
                                        <p>
                                            {post.overview === undefined ? "Pas de description" : post.overview.slice(0, 100) + "..."}
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
                        ))}
                    </div>

                </Swiper>

                <Toprate />
                <SerieToprate />

            </div >
        </>
    );
};

export default Posts;