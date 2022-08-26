import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import TopScroll from '../Headers/TopScroll'
import Header from 'components/Headers/Header'
import Footer from './Footer'


const AllOneshot = () => {

const [AllOneshot, setAllOneshot] = useState([]) 

    useEffect(() => { fetch(`https://marvel-api-linnea.herokuapp.com/marvel/medium/OneShot`) 
        .then(res => res.json()) 
        .then(data => { 
            setAllOneshot(data) 
        }) }, []) 

        return (
    <>
        <Header title="All OneShots"/>

        <div className="title-container">
            {/* <h3 className="main-title">All OneShots</h3> */}
        </div>
        
        <div className="categoryTag-feed"> 

            <TopScroll />

            <section className="movie-container">
                {AllOneshot.map((marvel) => (
                    <Link
                        to={`/feed/${marvel.title}`} 
                        key={marvel.id}
                        tabIndex="0"
                        >

                              
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
        <Footer />
    </>
    )
}



export default AllOneshot