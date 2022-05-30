import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

// import { BackIcon } from './BackIcon'

const Details = () => {

    const [details, setDetails] = useState([])
    const [category, setCategory] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
        }, [id])

        return (
            <div className="details-body"> 
                
                <NavLink className="backLink" to='/marvel'>
                   {/* <BackIcon /> */}
                </NavLink>
                
                <div className="movie-box">
                    <img className="movie-image" src={details.poster} alt={details.title} tabIndex="0"/>
                    <div className="movie-summary">
                       <h2>{details.title}</h2>
                       
                       <Link to={`/feed/${details.category}`}><h2>{details.category}</h2></Link>
                       <Link to={`/feed/tags/${details.tags}`}><h2>{details.tags}</h2></Link>


                {category.map((category) => (
                <Link
                to={`/marvel/${details.category}`} 
                    key={details.category}
                    tabIndex="0">
                    
                    <h2>{category.category}</h2>
                </Link>
            ))}
                        <p tabIndex="0" >{details.medium}</p>
                        <p tabIndex="0" >{details.director}</p>
                        <p tabIndex="0" >{details.release_date}</p>

                    </div>
                </div>
            </div>
    )
}



export default Details