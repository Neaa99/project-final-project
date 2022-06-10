import React from "react";
import { Link } from 'react-router-dom'



const TopScroll = (props) => {

    const tag = props.tags
    const category = props.category

    return (
        <div className="span-box">
            <div className="top-nav">
                <Link to={`/feed/tags`}>
                    <li className="list-item red">Tags</li>
                </Link>
                <Link to={`/feed/categories`}>
                    <li className="list-item blue">Categories</li>
                </Link>
                <Link to={``}>
                    <li className="list-item green">Movies</li>
                </Link>
                <Link to={``}>
                    <li className="list-item red">Liked</li>
                </Link>
            </div>
        </div>
    )
}

export default TopScroll