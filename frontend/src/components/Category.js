import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


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
            <h3>Category: {category}</h3> 
            <div className="category-feed"> 
                
             

                {Category.map((marvel) => (
                <Link
                    to={`/feed/${marvel.title}`} 
                    key={marvel.id}
                    tabIndex="0"
                    className="category-movie-box">
                
                    <h3 className="movie-title">{marvel.title}</h3>
                        
                    <img src={marvel.poster} alt={marvel.title}  className="movie-poster"/>
        
                    <div className="details"> 
                        <p>{marvel.release_date}</p> 
                        <p>Tags:</p>
                        <p className="tags-box">{marvel.tags.map((tag) => (<Link to={`/feed/tags/${tag}`}><p className="tag">{tag}</p></Link>))}</p>
                        
                        {/* <p className="tags-box"> {marvelTags.map((tag) => (<Link to={`/feed/tags/${tag}`}><p className="tag">{tag}</p></Link>))}</p>  */}
                       
                    
                    </div> 
                
                </Link> ))}
            </div>
            </>
    )
}



export default Category