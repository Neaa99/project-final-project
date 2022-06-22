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
                setDetails(data)
            })
        }, [title])

       useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
            .then(res => res.json())
            .then(data => {
                setCategory(data.category)
            })
        }, [])       

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
            .then(res => res.json())
            .then(data => {
                setTags(data.tags)
            })
        }, []) 

        return (
            <>
                <Header />

                <div className="title-container">
                    <h3 className="main-title">{details.title}</h3>
                </div>
            
                <section className="homePage"> 
                    <TopScroll />
                    <section className="details-body">
                   
                        <img className="movie-image" src={details.poster} alt={details.title} tabIndex="0"/>
                    
                        <section className="movie-summary">
                            <h2 className="movie-title">{details.title}</h2>
                            <p className="movie-medium bold">{details.medium}</p>
                                
                            <div className="movie-desc">
                                <p>{details.description}</p>
                            </div>

                            <div className="movie-details">
                                <p className="details-p"><span>Release date:</span> 
                                    <br/>{details.release_date}</p>
                                <p className="details-p"><span>Director:</span>
                                    <br/> {details.director}</p>

                                {details.numberOfEpisodes && (
                                    <p className="details-p"><span>Number of episodes:</span> 
                                        <br/>{details.numberOfEpisodes}</p>
                                )}
                                {details.box_office && (
                                        <p className="details-p"><span>Box office:</span> 
                                            <br/>{details.box_office}</p>
                                )}
                                 {details.oneShotLength && (
                                        <p className="details-p"><span>Length of OneSHot:</span> 
                                            <br/>{details.oneShotLength}</p>
                                )}
                            </div>
                        
                            <p className="details-category-title"><span>Categories:</span></p>
                            <div className="details-category">
                                <div className="category-box">{marvelCategories.map((category) => (
                                    <Link to={`/feed/categories/${category}`} key={uniqid()}>
                                        <p className="tag blue">{category}</p>
                                    </Link>))}
                                </div>
                            </div>

                            <p className="details-tags-title"><span>Tags:</span></p>
                            <div className="details-tags">
                                <div className="tags-box"> {marvelTags.map((tag) => (
                                    <Link to={`/feed/tags/${tag}`} key={uniqid()}>
                                        <p className="tag red">{tag}</p>
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