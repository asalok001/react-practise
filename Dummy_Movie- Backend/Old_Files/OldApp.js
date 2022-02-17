import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        // const response = {};
        // fetch('https://swapi.dev/api/films/')
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

            .then(respnse => {
                return respnse.json();
            })
            .then(data => {
                const transformedData = data.drinks.map(movieData => {
                    return {
                        id: movieData.idDrink,
                        title: movieData.strDrink,
                        openingText: movieData.strInstructions,
                        releaseDate: movieData.dateModified
                    };
                });
                console.log("Data", transformedData);
                setMovies(transformedData);
            });
    };

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies} />
            </section>
        </React.Fragment>
    );
}

export default App;
