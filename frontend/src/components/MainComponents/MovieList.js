import React, { useState, useEffect } from 'react'

const [movies, setMovies] = useState([]);

useEffect(() => {
    fetch(`https://marvel-api-linnea.herokuapp.com/marvel`)
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })
    }, [])

const MovieList = () => {
	// const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{movies.map((marvel, index) => (
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
			))}
		</>
	);
};

export default MovieList;
