import React from "react";
import { Link } from 'react-router-dom'



const TopScroll = () => {


    return (
        <div className="span-box">
            <div className="top-nav">
                <Link to={`/feed/tags`}>
                    <li className="scroll-tag red">Tags</li>
                </Link>
                <Link to={`/feed/categories`}>
                    <li className="scroll-tag blue">Categories</li>
                </Link>
                <Link to={``}>
                    <li className="scroll-tag green">Movies</li>
                </Link>
                <Link to={``}>
                    <li className="scroll-tag red">Liked</li>
                </Link>
            </div>
        </div>
    )
}

export default TopScroll