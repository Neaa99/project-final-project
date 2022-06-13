import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

import TopScroll from '../Headers/TopScroll'

const Tags = () => {


    const [newTag, setNewTag] = useState([]) 
    const { tags } = useParams()

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/tags/${tags}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNewTag(data)
            })
        }, [])      


        return (
            <section className="homePage">
                <h3 className="main-title">Category: {tags}</h3>
                
                <div className="categoryTag-feed"> 
            
                    <TopScroll />
            
                    <section className="movie-container">
                        {newTag.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0"
                                    className="movie-container">
            
                                          
                                    <div className="info-box">
                                        <img className="info-poster" src={marvel.poster} alt={marvel.title} />
                        
                                        <div className="info-details">
                                            <h3 className="info-title">{marvel.title}</h3>   
                                            <p className="info-date">{marvel.release_date}</p>
                                            <p className="info-desc">{marvel.description}</p>
                                            <p className="info-rating"><span className="IMBd">IMDb:</span> {marvel.imdbRating}</p>
                                            <p className="info-medium">{marvel.medium}</p>
                                            <div className="mini-tag-box">
                                                {marvel.tags[0] && (
                                                <p className="one-tag red">{marvel.tags[0]}</p>)} 
                                                {marvel.tags[1] && (
                                                <p className="one-tag red">{marvel.tags[1]}</p>)} 
                                                                
            
            
                                            </div>
            
            
            
                                        </div>
                                    </div>
                                </Link>
                             ))}
                        </section>
                        </div>
                        </section>
                )
}



export default Tags