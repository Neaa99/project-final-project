import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

// import { BackIcon } from './BackIcon'

const Category = () => {

const [Category, setCategory] = useState([]) 
const [newTag, setNewTag] = useState([]) 
const { category } = useParams() 

    useEffect(() => { fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/${category}`) 
        .then(res => res.json()) 
        .then(data => { 
            console.log(data) 
            setNewTag(data) 
        }) }, []) 


    useEffect(() => { fetch(`https://marvel-api-linnea.herokuapp.com/marvel/categories/${category}`) 
        .then(res => res.json()) 
        .then(data => { 
            console.log(data.tags) 
            setNewTag(data.tags)
         }) }, [])

        return (
            <div className="category-feed"> 
                <h3>Category: {category}</h3> 
             

                {Category.map((marvel) => (
                <Link
                    to={`/feed/${marvel.title}`} 
                    key={marvel.id}
                    tabIndex="0"
                    className="category-movie-box">
                
                    <h1 className="movie-title">{marvel.title}</h1>
                        
                    <img src={marvel.poster} alt={marvel.title}  className="movie-poster"/>
        
                    <div className="details"> 
                        <p>{marvel.release_date}</p> 
                        <p className="tags-box"> {newTag.map((tag) => (<Link to={`/feed/tags/${tag}`}><p className="tag">{tag}</p></Link>))}</p> 
                    </div> 
                
                </Link> ))}
            </div>
    )
}



export default Category