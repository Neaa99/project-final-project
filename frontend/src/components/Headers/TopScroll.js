import React from "react";
import { Link } from 'react-router-dom'



const TopScroll = () => {


    return (
        <div className="span-box">
            <div className="top-nav">
                <Link to={`/feed`}>
                    <li className="scroll-tag ">Feed</li>
                </Link>
                <Link to={`/feed/categories`}>
                    <li className="scroll-tag ">Categories</li>
                </Link>
                <Link to={`/feed/tags`}>
                    <li className="scroll-tag ">Tags</li>
                </Link>
                <Link to={`/feed/movies`}>
                    <li className="scroll-tag">Movies</li>
                </Link>
                <Link to={`/feed/series`}>
                    <li className="scroll-tag mobile-hide">Series</li>
                </Link>
                <Link to={`/feed/oneshot`}>
                    <li className="scroll-tag mobile-hide">Oneshots</li>
                </Link>

                
                
            </div>
        </div>
    )
}

export default TopScroll