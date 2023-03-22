import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id,coverImg,title,year,summary,genres}){

    return(
        <div>
            <img src={coverImg} alt={title}></img>
            <h4>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h4>
            <h4>{year}</h4>
            <p>{summary}</p>
            <ul>
              {genres.map((genre)=> 
              <li key={genre}>{genre}</li>)}
            </ul>
            <hr></hr>
        </div>
    );
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;