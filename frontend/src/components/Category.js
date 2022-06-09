import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import TopScroll from './TopScroll'


const Category = (movie) => {

const [Category, setCategory] = useState([]) 
const { category } = useParams() 

    useEffect(() => { fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/${category}`) 
        .then(res => res.json()) 
        .then(data => { 
            // console.log(data) 
            setCategory(data) 
        }) }, []) 

        return (
<>
            <h3 className="main-title">Category: {category}</h3>
            <div className="category-feed"> 

            <TopScroll />

            <section className="movie-container">

            
                {Category.map((marvel) => (
                    <Link
                        to={`/feed/${marvel.title}`} 
                        key={marvel.id}
                        tabIndex="0"
                        className="movie-container">

                              
                        <div className="info-box">
                            <img className="tag-poster" src={marvel.poster} alt={marvel.title} />
            
                            <div className="tag-details">
                                <h3 className="tag-title">{marvel.title}</h3>   
                                <p className="tag-date">{marvel.release_date}</p>
                                <p className="tag-desc">{marvel.description}</p>
                                <p className="tag-rating"><span className="IMBd">IMDb:</span> {marvel.imdbRating}</p>
                                <p className="tag-medium">{marvel.medium}</p>
                                <div className="mini-tag-box">
                                    <p className="one-tag">{marvel.tags[0]}</p>
                                    {marvel.tags[1] && (
                                    <p className="one-tag">{marvel.tags[1]}</p>)} 
                                                    


                                </div>



                            </div>
                        </div>
                    </Link>
                 ))}
            </section>
            </div>
            </>
    )
}



export default Category