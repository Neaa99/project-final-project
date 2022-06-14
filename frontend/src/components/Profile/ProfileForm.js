import React from 'react'

const ProfileForm = ({ fullName, setFullName, age, setAge, superhero, setSuperhero, movie, setMovie, onFormSubmit }) => {
    return (
        <>
            <p>Add more info to your profile</p>
            <form 
                className="profile-info-form" 
                onSubmit={onFormSubmit}
            >
                <label htmlFor="fullname">Full name</label>
                <input 
                    id="fullname" 
                    className="input" 
                    type="text" 
                    value={fullName} 
                    onChange={(event) => setFullName(event.target.value)} 
                />
                <label htmlFor="age">Age</label>
                <input 
                    id="age" 
                    className="input" 
                    type="number" 
                    value={age} 
                    onChange={(event) => setAge(event.target.value)} 
                />
                <label htmlFor="superhero">Super Hero name</label>
                <input 
                    id="superhero" 
                    className="input" 
                    type="text" 
                    value={superhero} 
                    onChange={(event) => setSuperhero(event.target.value)} 
                />
                <label htmlFor="movie">Favorite Marvel movie</label>
                <select 
                    id="movie" 
                    className="description-textarea" 
                    value={movie} 
                    onChange={(event) => setMovie(event.target.value)} 
                >
                    <option value="" defaultValue disabled>Select a movie</option>
                    <option value="Iron Man">Iron Man</option>
                    <option value="The Hulk">The Hulk</option>
                    <option value="Avengers">Avengers</option>
                    <option value="Captain America">Captain America</option>
                    <option value="Guardians of the Galaxy">Guardians of the Galaxy</option>
                    <option value="Shang-Chi">Shang-Chi</option>
                    <option value="Spider-Man">Spider-Man</option>
                    <option value="Captain Marvel">Captain Marvel</option>
                    <option value="Doctor Strange">Doctor Strange</option>
                    <option value="Ant-Man">Ant-Man</option>
                    <option value="Eternals">Eternals</option>
                    <option value="Black Widow">Black Widow</option>
                    <option value="Black Panther">Black Panther</option>
                    <option value="Deadpool">Deadpool</option>
                    <option value="Wolverine">Wolverine</option>
                    <option value="X-Men">X-Men</option>
                    <option value="Fantastic Four">Fantastic Four</option>
                    <option value="Venom">Venom</option>
                    <option value="Blade">Blade</option>
                    <option value="Morbius">Morbius</option>
                </select>
                <button className="btn custom-btn" type="submit">Add</button>
          </form>
        </>
    )
}

export default ProfileForm