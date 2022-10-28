
import Navbar from "../Navbar";

import "../css/Navbar.css";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Select from 'react-select';
import SerieToprate from '../../../store/middleware/serietoprate'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { NavLink } from "react-router-dom";


import { Form, FormControl, Button } from 'react-bootstrap';

const Serie = () => {
    const [tv, settv] = useState([]);
    const [selectcat, setSelectcat] = useState([]);

    let [query, setQuery] = useState('');

    const selectableOptions = [

        { "values": 10759, "label": "Action & Adventure" },
        { "values": 16, "label": "Animation" },
        { "values": 35, "label": "Comedy" },
        { "values": 80, "label": "Crime" },
        { "values": 99, "label": "Documentary" },
        { "values": 18, "label": "Drama" },
        { "values": 10751, "label": "Family" },
        { "values": 10762, "label": "Kids" },
        { "values": 9648, "label": "Mystery" },
        { "values": 10763, "label": "News" },
        { "values": 10764, "label": "Reality" },
        { "values": 10765, "label": "Sci-Fi & Fantasy" },
        { "values": 10766, "label": "Soap" },
        { "values": 10767, "label": "Talk" },
        { "values": 10768, "label": "War & Politics" },
        { "values": 37, "label": "Western" },
    ]

    const searchtv = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_KEY}&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();

            settv(data.results);
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
        const searchCateg = async (e) => {

            console.log("Searching");
            try {
                const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_KEY}&&with_genres=${firstElement}`;
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
            <Form className="d-flex searchbar" onSubmit={searchtv} autoComplete="off">
                <FormControl
                    type="search"
                    placeholder="Chercher une série"
                    className="me-2"
                    aria-label="search"
                    name="query"
                    value={query} onChange={changeHandler}></FormControl>
                <Button variant="secondary" type="submit"><i className="icon-search"></i></Button>
            </Form>

            <Select
                isMulti
                placeholder="Choisir une Catégorie"
                onChange={handleChange}
                className="basic-multi-select"
                classNamePrefix="select"
                options={selectableOptions}
            />
            {query ?
                <>

                    <div className="BoddyPopular">

                        {tv.map((post, elements) => (
                            <>
                                <SwiperSlide className="vignette" key={post.id}>
                                    <div className="itemHover">
                                        <h2>
                                            {post.name}
                                        </h2>
                                        <p>
                                            {post.overview === undefined ? "Pas de description" : post.overview.slice(0, 450) + "..."}
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
                    <SerieToprate />
                </>
            }
        </>
    )
};

export default Serie