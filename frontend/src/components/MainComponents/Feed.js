import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import TopScroll from 'components/Headers/TopScroll'
import Header from 'components/Headers/Header'
import Footer from './Footer'

const Feed = () => {

    const [marvel, setMarvel] = useState([])
    const [avengers, setAvengers] = useState([])
    const [asgardiens, setAsgardiens] = useState([])
    const [spiderman, setSpiderman] = useState([])
    const [xmen, setXmen] = useState([])
    const [animated, setAnimated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [oneShot, setOneShot] = useState([])

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel`)
            .then(res => res.json())
            .then(data => {
                setMarvel(data)
            })
        }, [])
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Avengers`)
            .then(res => res.json())
            .then(data => {
                setAvengers(data)
            })
        }, [])    
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Asgardiens`)
            .then(res => res.json())
            .then(data => {
                setAsgardiens(data)
            })
        }, [])   
        
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Spider-Man`)
            .then(res => res.json())
            .then(data => {
                setSpiderman(data)
            })
        }, [])   
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/X-Men`)
            .then(res => res.json())
            .then(data => {
                setXmen(data)
            })
        }, [])     
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Animated`)
            .then(res => res.json())
            .then(data => {
                setAnimated(data)
            })
        }, [])    
        
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Upcoming`)
            .then(res => res.json())
            .then(data => {
                setUpcoming(data)
            })
        }, [])  

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/OneShot`)
            .then(res => res.json())
            .then(data => {
                setOneShot(data)
            })
        }, []) 

        return (
            <>
                <Header />
                <div className="title-container">
                    <h3 className="main-title">FEED</h3>
                </div>

                <div className="homePage">
                    <TopScroll />
                    <h3 className="feed-title">All marvel:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {marvel.map((marvel) => (
                            
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>
        
                    <h3 className="feed-title">Avengers:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {avengers.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <h3 className="feed-title">Upcoming movies and series:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {upcoming.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <h3 className="feed-title">Asgardiens:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {asgardiens.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <h3 className="feed-title">Spider-Man:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {spiderman.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <h3 className="feed-title">X-Man:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {xmen.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <h3 className="feed-title">Animated series and movies:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {animated.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <h3 className="feed-title">OneShots:</h3>
                    <section className="scroller">
                        <div className="inside-scroller">
                            {oneShot.map((marvel) => (
                                <Link
                                    to={`/feed/${marvel.title}`} 
                                    key={marvel.id}
                                    tabIndex="0">
                                    <p className="bold">{marvel.title}</p>    
                                    <img src={marvel.poster} alt={marvel.title}/>
                                </Link>
                            ))}
                        </div>
                    </section>
        
                </div>
                <Footer />
            </>
        )
}

export default Feed