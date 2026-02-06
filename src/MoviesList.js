import Movie from "./Movie";

export default function MoviesList(props) {
    return (
        <>
            <h2>Titles</h2>
            <ul>
                {props.movies.map((movie) => (
                    <Movie 
                        key={movie.title} 
                        movie={movie} 
                        onDelete={props.onDeleteMovie}
                    />
                ))}
            </ul>
        </>
    );
}
