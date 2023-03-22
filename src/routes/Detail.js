import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import styles from "./Detail.module.css";

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
                <div className={styles.under}>
                    <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie__img}></img>
                    <div className={styles.content} >
                        <div className={styles.wraper}>
                            <div className={styles.meta}>
                                <h4>Year: {movie.year}</h4>
                                <h4>Rating: {movie.rating}</h4>
                                <h4>Duration: {movie.runtime} min</h4>
                            </div>
                            <div className={styles.description}>
                                <h2>Description</h2>
                                <p>{movie.description_full.length > 600 ? `${movie.description_full.slice(0,600)}...` : movie.description_full}</p>
                            </div>
                            <div className={styles.list} >
                                <ul >
                                    {movie.genres.map((genre)=> 
                                    <li key={genre}>{genre}</li>)}
                                </ul>
                            </div>
                            <h5><Link to={"/"}>Go Home</Link></h5>
                        </div>
                    </div>
                </div>                
            </div>
            
            
           }
        </div>
    );

}

export default Detail;