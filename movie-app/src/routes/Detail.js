import { useEffect, useState } from "react";
import { generatePath, useParams } from "react-router-dom";
function Detail() {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(true);
    setMovie(json.data.movie);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <h1>제목: {movie.title}</h1>
          <span>{movie.rating}</span>
          <br />
          장르
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
}
export default Detail;
