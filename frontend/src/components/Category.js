import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

// import { BackIcon } from './BackIcon'

const Category = () => {

    const [Category, setCategory] = useState([])
    const { category } = useParams()

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategory(data)
            })
        }, [category])

        return (
            <div className="homePage"> 
             

                {Category.map((marvel) => (
                <Link
                    to={`/feed/${marvel.id}`} 
                    key={marvel.id}
                    tabIndex="0">
                    
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



export default Category