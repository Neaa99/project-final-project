import React from "react";
import { Link } from 'react-router-dom'



const TopScroll = () => {


    return (
        <div className="span-box">
            <div className="top-nav">
                <Link to={`/feed/tags`}>
                    <li className="scroll-tag ">Tags</li>
                </Link>
                <Link to={`/feed/categories`}>
                    <li className="scroll-tag ">Categories</li>
                </Link>
                <Link to={`/feed/movies`}>
                    <li className="scroll-tag ">Movies</li>
                </Link>
                <Link to={`/feed/series`}>
                    <li className="scroll-tag ">Series</li>
                </Link>
                {/* <Link to={`/feed/oneshot`}>
                    <li className="scroll-tag ">Oneshots</li>
                </Link> */}
                {/* <Link to={``}>
                    <li className="scroll-tag ">Liked</li>
                </Link> */}
            </div>
        </div>
    )
}

export default TopScroll