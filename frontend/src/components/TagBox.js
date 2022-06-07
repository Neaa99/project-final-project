import React, { useState, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

// import { BackIcon } from './BackIcon'

const TagBox = () => {

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
            })
        }, [title])

       useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.category)
                setCategory(data.category)
            })
        }, [])       

    useEffect(() => {
        fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.tags)
                setTags(data.tags)
            })
        }, []) 

        return (
            <div className="main"> 
                
                <NavLink className="backLink" to='/marvel'>
                   {/* <BackIcon /> */}
                </NavLink>
                
                <div className="movie-box">
                    <img className="movie-image" src={details.poster} alt={details.title} tabIndex="0"/>
                        <section className="movie-summary">
                        <h2 className="movie-title">{details.title}</h2>

                            <div className="movie-details">
                                <p tabIndex="0" >{details.medium}</p>
                                <p tabIndex="0" >Director: {details.director}</p>
                                <p tabIndex="0" >Release date: {details.release_date}</p>

                                {details.numberOfEpisodes && (
                                    <p tabIndex="0" >Number of episodes: {details.numberOfEpisodes}</p>
                                )}
                                {details.box_office && (
                                        <p tabIndex="0" >Box office: {details.box_office}</p>

                                )}
                                 {details.oneShotLength && (
                                        <p tabIndex="0" >Length of OneSHot: {details.oneShotLength}</p>


                                )}


                        

                            </div>
                        
                            <div className="categories">
                                <h2>Categories:</h2>
                                {marvelCategories.map((category) => (<Link to={`/feed/categories/${category}`}><p>{category}</p></Link>))}
                            </div>

                            <div className="tags">
                                <h2>Tags:</h2>
                                <p className="tags-box"> {marvelTags.map((tag) => (<Link to={`/feed/tags/${tag}`}><p className="tag">{tag}</p></Link>))}</p> 
                            </div>

                            <div className="movie-desc">
                                <p>{details.description}</p>
                            </div>
                        </section>
                </div>
            </div>
    )
}



export default TagBox