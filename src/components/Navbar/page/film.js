import "../css/Navbar.css";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Select from 'react-select';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";
import Toprate from "../../../store/middleware/apitoprate";

// import required modules
import { Pagination, Navigation } from "swiper";
import Navbar from "../Navbar";
import { Form, FormControl, Button } from 'react-bootstrap';

const Film = () => {
    const [movies, setMovies] = useState([]);
    const [selectcat, setSelectcat] = useState([]);

    let [query, setQuery] = useState('');

    const selectableOptions = [

        { "values": 28, "label": "Action" },
        { "values": 12, "label": "Adventure" },
        { "values": 16, "label": "Animation" },
        { "values": 35, "label": "Comedy" },
        { "values": 80, "label": "Crime" },
        { "values": 99, "label": "Documentary" },
        { "values": 18, "label": "Drama" },
        { "values": 10751, "label": "Family" },
        { "values": 14, "label": "Fantasy" },
        { "values": 36, "label": "History" },
        { "values": 27, "label": "Horror" },
        { "values": 10402, "label": "Music" },
        { "values": 9648, "label": "Mystery" },
        { "values": 10749, "label": "Romance" },
        { "values": 878, "label": "Science Fiction" },
        { "values": 10770, "label": "TV Movie" },
        { "values": 53, "label": "Thriller" },
        { "values": 10752, "label": "War" },
        { "values": 37, "label": "Western" }

    ]

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();

            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
        setQuery(e.target.value);
    }

    const handleChange = (e) => {

        e.map((index) => console.log(index.values))
        let categsFinaly = e.map((index) => index.values)

        const firstElement = categsFinaly.shift();
        const searchCateg = async () => {

            console.log("Searching");
            try {
                const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&&with_genres=${firstElement}`;
                const res = await fetch(url);
                const data = await res.json();


                setSelectcat(data.results);
            }
            catch (e) {
                console.log(e);
            }
        }
        searchCateg()

    }

    return (
        <>

            <Navbar />
            <Form className="d-flex searchbar" onSubmit={searchMovie} autoComplete="off">
                <FormControl
                    type="search"
                    placeholder="Rechercher un film"
                    className="me-2"
                    aria-label="search"
                    name="query"
                    value={query} onChange={changeHandler}></FormControl>
                <Button variant="secondary" type="submit"><i className="icon-search"></i></Button>
            </Form>

            <Select
                isMulti
                placeholder="Choisir une Cat??gorie"
                onChange={handleChange}
                className="basic-multi-select"
                classNamePrefix="select"
                options={selectableOptions}
            />
            {query ?
                <>
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

                            {movies.map((post, elements) => (
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
                            ))
                            }
                        </div>
                    </Swiper>
                </>
                :
                <>
                    <div className="BoddyPopular">

                        {selectcat.map((post, elements) => (
                            <>

                                <SwiperSlide className="vignette" key={post.id}>
                                    <div className="itemHover">
                                        <h2>
                                            {post.title}
                                        </h2>
                                        <p>
                                            {post.overview}
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
                    <Toprate />
                </>
            }
        </>
    )
};
export default Film