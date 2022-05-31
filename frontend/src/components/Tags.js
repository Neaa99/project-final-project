import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

// import { BackIcon } from './BackIcon'

const Tags = () => {

    const [tagDetails, setTagDetails] = useState([])
    const { tags } = useParams()

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/tags/${tags}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTagDetails(data)
            })
        }, [tags])

        return (
            <div className="homePage"> 
                

                {tagDetails.map((marvel) => (
                <Link
                    to={`/feed/${marvel.id}`} 
                    key={marvel.id}
                    tabIndex="0">
                    
                <img src={marvel.poster} alt={marvel.title}/>
    
                <div className="details">
                    <h1>{marvel.title}</h1>
                    <p>{marvel.release_date}</p>
                </div>
                </Link>
            ))}
            </div>
    )
}



export default Tags