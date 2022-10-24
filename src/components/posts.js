import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/posts";
import { useEffect } from "react";

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
        <div>
            <h1>Popular</h1>

            {PopularMovie.map((post) => (
                <ul>
                    <li >{post.title}</li>
                    <li >{post.overview}</li>
                </ul>
            ))}

        </div>
    );
};

export default Posts;