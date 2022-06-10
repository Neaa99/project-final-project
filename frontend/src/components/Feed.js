import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import TopScroll from './TopScroll'


const Marvel = () => {

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
                console.log(data)
                setMarvel(data)
            })
        }, [])
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Avengers`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAvengers(data)
            })
        }, [])    
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Asgardiens`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAsgardiens(data)
            })
        }, [])   
        
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Spider-Man`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpiderman(data)
            })
        }, [])   
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/X-Men`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setXmen(data)
            })
        }, [])     
    
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Animated`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAnimated(data)
            })
        }, [])    
        
    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/Upcoming`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpcoming(data)
            })
        }, [])  

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/OneShot`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOneShot(data)
            })
        }, []) 

        return (
            
            
            <div className="homePage">
                <TopScroll />
            <h3>All marvel:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {marvel.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>
    
                <h3>Avengers:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {avengers.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>

                <h3>Upcoming movies and series:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {upcoming.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>

                <h3>Asgardiens:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {asgardiens.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>

                <h3>Spider-Man:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {spiderman.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>

                <h3>X-Man:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {xmen.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>

                <h3>Animated series and movies:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {animated.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>

                <h3>OneShots:</h3>
                <section className="all-marvel">
                    <div className="scroller">
                        {oneShot.map((marvel) => (
                        
                            <Link
                                to={`/feed/${marvel.title}`} 
                                key={marvel.id}
                                tabIndex="0">
                                <p>{marvel.title}</p>    
                                <img src={marvel.poster} alt={marvel.title}/>
                            </Link>
                        ))}
                    </div>
                </section>
    
            </div>
        )
}

export default Marvel