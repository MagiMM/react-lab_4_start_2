export default function Movie(props) {
    return (
        <li>
            {props.movie.title} ({props.movie.year})
            <button 
                onClick={() => props.onDelete(props.movie.title)}
                style={{marginLeft: '10px'}}
            >
                Usuń
            </button>
        </li>
    );
}
