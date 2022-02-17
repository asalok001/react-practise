import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErroe] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setErroe(null);
    // const response = {};
    // fetch('https://swapi.dev/api/films/')

    try {
      //  GET Data using this link and also skip addmoviesHandler() 
      // const response = await fetch(
      //   'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      // );

      // POST using this link below
      const response = await fetch(
        'https://react-http-movie-152f7-default-rtdb.firebaseio.com/drinks.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      };

      const data = await response.json();

      // fetching from firebase
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }
      setMovies(loadedMovies);

      // fetching from drinks link skip loadedmovies from firebase

      // const transformedData = data.drinks.map(movieData => {
      //   return {
      //     id: movieData.idDrink,
      //     title: movieData.strDrink,
      //     openingText: movieData.strInstructions,
      //     releaseDate: movieData.dateModified
      //   };
      // });
      // console.log('Data', transformedData);
      // setMovies(transformedData);
      // setIsLoading(false);
    } catch (error) {
      setErroe(error.message);
    };
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  };

  if (error) {
    content = error;
  };

  if (isLoading) {
    content = <p>Loading...</p>;
  };

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-movie-152f7-default-rtdb.firebaseio.com/drinks.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      Headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = response.json();
    console.log(data);
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
      {/* <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section> */}
    </React.Fragment>
  );
}

export default App;
