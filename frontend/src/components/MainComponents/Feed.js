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
                <Header title="Feed" />

                <div className="homePage">
                    <TopScroll />
                    <h3 className="feed-title" tabIndex="0">All marvel:</h3>
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
        
                    <h3 className="feed-title" tabIndex="0">Avengers:</h3>
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

                    <h3 className="feed-title" tabIndex="0">Asgardiens:</h3>
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

                    <h3 className="feed-title" tabIndex="0">Spider-Man:</h3>
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

                    <h3 className="feed-title" tabIndex="0">X-Man:</h3>
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

                    <h3 className="feed-title" tabIndex="0">Animated series and movies:</h3>
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

                    <h3 className="feed-title" tabIndex="0">Upcoming movies and series:</h3>
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

                    <h3 className="feed-title" tabIndex="0">OneShots:</h3>
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