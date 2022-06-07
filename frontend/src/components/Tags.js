import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

import TagBox from './TagBox'

// import { BackIcon } from './BackIcon'

const Tags = () => {

    const [tagDetails, setTagDetails] = useState([])
    const { tags } = useParams()

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/tags/${tags}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.tags)
                setTagDetails(data)
            })
        }, [tags])

        return (
            <div className="category-feed"> 
             
            <h3>Tags: {tags}</h3>

                {tagDetails.map((marvel) => (
                <Link
                    to={`/feed/${marvel.title}`} 
                    key={marvel.id}
                    tabIndex="0"
                    className="category-movie-box">

               <h1 className="movie-title">{marvel.title}</h1>        
                    
                <img src={marvel.poster} alt={marvel.title} className="movie-poster"/>
    
                <div className="details">
                    <p>{marvel.release_date}</p>
                    {/* <p className="tags-box"> {marvelTags.map((tag) => (<Link to={`/feed/tags/${tag}`}><p className="tag">{tag}</p></Link>))}</p> */}
                    {/* <TagBox /> */}
                    
                </div>
                </Link>
            ))}
            </div>
    )
}



export default Tags