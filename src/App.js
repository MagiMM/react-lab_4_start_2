import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";


function App() {
    const [movies, setMovies] = useState([
        {title: "Wall-E", year: 2004},
        {title: "Matrix", year: 1991}
    ]);
    const [showForm, setShowForm] = useState(false);

    function deleteMovie(title) {
        setMovies(movies.filter(movie => movie.title !== title));
    }

    function addMovie(movie) {
        setMovies([...movies, movie]);
        setShowForm(false);
    }

    return (
      <div className='container'>
          <h1>My favourite movies to watch</h1>
          
          {movies.length > 0 ? (
              <MoviesList movies={movies} onDeleteMovie={deleteMovie}/>
          ) : (
              <p>Brak filmów na liście. Dodaj swój pierwszy film!</p>
          )}
          
          <button onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Ukryj formularz' : 'Dodaj film'}
          </button>
          
          {showForm && <MovieForm onMovieSubmit={addMovie}/>}
      </div>
    );
}

export default App;
