import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Marvel = () => {

    const [marvel, setMarvel] = useState([])

    useEffect(() => {
        fetch(`https://books-linnea.herokuapp.com/marvel`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMarvel(data)
            })
        }, [])

        return (
            <div className="homePage">
    
            {marvel.map((marvel) => (
                <Link
                    to={`/marvel/${marvel.id}`} 
                    key={marvel.id}
                    tabindex="0">
                    
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

export default Marvel