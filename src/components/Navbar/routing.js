import React from "react";
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";
import Posts from "../posts";
import Film from './page/film'
import Serie from "./page/serie";
import News from './page/nouveaute'

// console.log(Film)

const App1 = () => {
    let routes = useRoutes([
        { path: "film", element: <Film /> },
        { path: "Serie", element: <Serie /> },
        { path: "Nouveaute", element: <News /> },
        { path: "/", element: <Posts /> },
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
        <Router>
            <App1 />
        </Router>

    );
};

export default AppWrapper;