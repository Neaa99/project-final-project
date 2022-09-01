import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import uniqid from 'uniqid';

import TopScroll from 'components/Headers/TopScroll';
import Header from 'components/Headers/Header';

const Details = () => {


    const [details, setDetails] = useState([])
    const [marvelCategories, setCategory] = useState([])
    const [marvelTags, setTags] = useState([])
    const { title } = useParams()

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
                setTags(data.tags)
                setCategory(data.category)


            })
        }, [title])

        return (
            <>
                <Header title={details.title}/>
            
                <section className="homePage"> 
                    <TopScroll />
                    <section className="details-body">
                   
                        <img className="movie-image" src={details.poster} alt={details.title} tabIndex="0"/>
                    
                        <section className="movie-summary">
                            <h2 className="movie-title" tabIndex="0">{details.title}</h2>
                            <p className="movie-medium bold" tabIndex="0">{details.medium}</p>
                                
                            <div className="movie-desc" tabIndex="0">
                                <p>{details.description}</p>
                            </div>
                            <p className="info-rating" tabIndex="0"><span className="IMBd">IMDb:</span> {details.imdbRating}</p>


                            <div className="movie-details">
                                <p className="details-p" tabIndex="0"><span>Release date:</span> 
                                    <br/>{details.release_date}</p>
                                <p className="details-p" tabIndex="0"><span>Director:</span>
                                    <br/> {details.director}</p>

                                {details.numberOfEpisodes && (
                                    <p className="details-p" tabIndex="0"><span>Number of episodes:</span> 
                                        <br/>{details.numberOfEpisodes}</p>
                                )}
                                {details.box_office && (
                                        <p className="details-p" tabIndex="0"><span>Box office:</span> 
                                            <br/>{details.box_office}</p>
                                )}
                                 {details.oneShotLength && (
                                        <p className="details-p" tabIndex="0"><span>Length of OneSHot:</span> 
                                            <br/>{details.oneShotLength} min</p>
                                )}
                            </div>
                        
                            <p className="details-category-title" tabIndex="0"><span>Categories:</span></p>
                            <div className="details-category">
                                <div className="category-box">{marvelCategories.map((category) => (
                                    <Link to={`/feed/categories/${category}`} key={uniqid()}>
                                        <p className="tag blue" tabIndex="0">{category}</p>
                                    </Link>))}
                                </div>
                            </div>

                            <p className="details-tags-title" tabIndex="0"><span>Tags:</span></p>
                            <div className="details-tags">
                                <div className="tags-box"> {marvelTags.map((tag) => (
                                    <Link to={`/feed/tags/${tag}`} key={uniqid()}>
                                        <p className="tag red" tabIndex="0">{tag}</p>
                                    </Link>))}
                                </div> 
                            </div>
                        </section>
                </section>
            </section>
            
            </>
    )
}



export default Details