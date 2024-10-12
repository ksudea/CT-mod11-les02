import React, { useState } from 'react';

const MoviesList = () => {
    // Task 1
    const [movieList, setMovieList] = useState([
        {title: "La haine", genre: "crime", description: "24 hours in the lives of three young men in the French suburbs the day after a violent riot."}, 
        {title: "The Godfather", genre: "crime", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."}, 
        {title: "The Departed", genre: "crime", description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."}, 
        {title: "Umberto D.", genre: "drama", description: "An elderly man and his dog struggle to survive on his government pension in Rome."},
        {title: "Gladiator", genre: "action", description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."}
    ]);

    // Task 2
    const [showDescription, setShowDescription] = useState(
        [false, false, false, false, false]
    );

    const toggleDisplayDescription = (index) => {
        const updatedShowDescription = [...showDescription];
        updatedShowDescription[index] = !showDescription[index];
        setShowDescription(updatedShowDescription); 
    };

    // Task 3
    const removeMovie = (index) => {
        setMovieList(movieList.filter((movie, i) => i !== index));
        setShowDescription(showDescription.filter((_, i) => i != index));
    }

    // Task 4: crime
    const [showCrime, setShowCrime] = useState(false);
    const toggleGenreOnlyView = () => {
        setShowCrime(!showCrime);
    }
    const crimeMovies = showCrime ? movieList.filter((m) => m.genre === 'crime') : movieList;

    return (
        <div>
           <button onClick={toggleGenreOnlyView}>
                {showCrime ? 'Show Entire List of Movies' : 'Show Crime Thrillers Only'}
            </button>

            <ul>
                {crimeMovies.map((movie, index) => (
                <li key={index}>
                    <h4>{movie.title}</h4> 
                    <button onClick={() => toggleDisplayDescription(index)}>
                        <small>{showDescription[index] ? 'Close Description' : 'Show Description'}</small>
                    </button>
                    {showDescription[index] && <p>{movie.description}</p>}
                    <button onClick={() => removeMovie(index)}>Remove Movie</button>
                </li>
                 ))}
            </ul>

        </div>
    );
};

export default MoviesList;