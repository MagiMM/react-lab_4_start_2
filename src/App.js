import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "milligram";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([
        {title: "Wall-E", year: 2004},
        {title: "Matrix", year: 1991}
    ]);

    
    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    
    function handleYearChange(event) {
        setYear(event.target.value);
    }
    
    function handleAddMovie() {
        if (title.length < 3) {
            alert("Tytuł jest za krótki");
            return;
        }
        
        const newMovie = {
            title: title,
            year: year
        };
        
        setMovies([...movies, newMovie]);
        
        // Wyczyść pola formularza
        setTitle('');
        setYear('');
    }
    
    let message;
    if (title.length < 5) {
        message = "Tytuł jest za krótki. Nagrywają takie filmy?";
    } else if (title.length < 15) {
        message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
    } else {
        message = "Tytuł jest za długi, nikt tego nie zapamięta.";
    }

    return (
      <div className='container'>
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
            <ul>{movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)}</ul>
            <h2>Add movie</h2>
            <h5>Tytuł</h5>
            <input type="text" value={title} onChange={handleTitleChange}/>
            {title.length > 0 && <div>{message}</div>}
            <h5>Rok nagrania</h5>
            <input type="text" value={year} onChange={handleYearChange}/> 
            <button type='button' onClick={handleAddMovie}>DODAJ FILM</button>
        </div>
    );
}

export default App;
