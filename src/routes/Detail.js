import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

function Detail (){
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const {id} = useParams();

    const getMovie = async()=>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(()=>{
        getMovie();        
    },[]);
    return(
        <div>
          {loading ? <h4>loading .....</h4> : 
            <div key={movie.id}>
                <img src={movie.medium_cover_image} alt={movie.title}></img>
                <h4>Year: {movie.year}</h4>
                <h4>Rating: {movie.rating}</h4>
                <h4>Duration: {movie.runtime} min</h4>
                <p>{movie.description_full}</p>
                <ul>
                {movie.genres.map((genre)=> 
                <li key={genre}>{genre}</li>)}
                </ul>
                <h5><Link to={"/"}>Go Home</Link></h5>
            </div>
            
            
           }
        </div>
    );

}

export default Detail;