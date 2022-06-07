// import React, { useState, useEffect } from 'react'
// import { NavLink, Link, useParams } from 'react-router-dom'

// // import { BackIcon } from './BackIcon'

// const TagBox = () => {


//     const [newdetails, setnewDetails] = useState([])
//     const [newTag, setNewTag] = useState([])
//     const { title } = useParams()

//     useEffect(() => {
//         fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setnewDetails(data)
//             })
//         }, [title])      

//     useEffect(() => {
//         fetch(`https://marvel-api-linnea.herokuapp.com/marvel/${title}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data.tags)
//                 setTags(data.tags)
//             })
//         }, []) 

      
        
//         // if ({details.medium} === "Movie") {
//         //     <p tabIndex="0" >Box office: {details.box_office}</p>
//         // } else if ({details.medium} === "Series") {
//         //     <p tabIndex="0" >Number of episodes: {details.numberOfEpisodes}</p>
//         // } else {
//         //     <p tabIndex="0" >Length of OneShot: {details.oneShotLength}</p>
//         // }
//         // const x = () => {
//         //     if (details.medium === 'Movie') {
//         //         let dependMedium = details.box_office
//         //     } else if (details.medium === 'Series') {
//         //         let dependMedium = details.numberOfEpisodes
//         //     } else {
//         //         let dependMedium = details.oneShotLength
//         //     }
//         // }

//         return (
//             <div className="main"> 
                
//                 <NavLink className="backLink" to='/marvel'>
//                    {/* <BackIcon /> */}
//                 </NavLink>
                
//                 <div className="movie-box">
//                     <img className="movie-image" src={newdetails.poster} alt={newdetails.title} tabIndex="0"/>
//                         <section className="movie-summary">
//                         <h2 className="movie-title">{newdetails.title}</h2>

//                             <div className="movie-details">
//                                 <p tabIndex="0" >{newdetails.medium}</p>
//                                 <p tabIndex="0" >Director: {newdetails.director}</p>
//                                 <p tabIndex="0" >Release date: {newdetails.release_date}</p>

//                                 {newdetails.numberOfEpisodes && (
//                                     <p tabIndex="0" >Number of episodes: {newdetails.numberOfEpisodes}</p>
//                                 )}
//                                 {newdetails.box_office && (
//                                         <p tabIndex="0" >Box office: {newdetails.box_office}</p>

//                                 )}
//                                  {newdetails.oneShotLength && (
//                                         <p tabIndex="0" >Length of OneSHot: {newdetails.oneShotLength}</p>


//                                 )}


                        

//                             </div>

//                             <div className="tags">
//                                 <h2>Tags:</h2>
//                                 {newTag.map((tag) => (<Link to={`/feed/tags/${tag}`}><h2>{tag}</h2></Link>))}
//                             </div>

//                             <div className="movie-desc">
//                                 <p>{newdetails.description}</p>
//                             </div>
//                         </section>
//                 </div>
//             </div>
//     )
// }



// export default TagBox