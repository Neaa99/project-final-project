import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

import TagBox from './TagBox'

// import { BackIcon } from './BackIcon'

const Tags = () => {

    const [tagDetails, setTagDetails] = useState([])
    const [newTag, setNewTag] = useState([]) 
    const { tags } = useParams()

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTagDetails(data)
            })
        }, [title])      

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.tags)
                setNewTag(data.tags)
            })
        }, []) 

        return (
            <>
            <h3>Tags: {tags}</h3>
            <div className="category-feed"> 

                {tagDetails.map((marvel) => (
                <Link
                    to={`/feed/${marvel.title}`} 
                    key={marvel.id}
                    tabIndex="0"
                    className="category-movie-box">

               <h3 className="movie-title">{marvel.title}</h3>        
                    
                <img src={marvel.poster} alt={marvel.title} className="movie-poster"/>
    
                <div className="details">
                    <p>{marvel.release_date}</p>
                    {/* <p className="tags-box"> {newTag.map((tag) => (<Link to={`/feed/tags/${tag}`}><p className="tag">{tag}</p></Link>))}</p> */}
                    {/* <TagBox /> */}
                    
                </div>
                </Link>
            ))}
            </div>
            </>
    )
}



export default Tags