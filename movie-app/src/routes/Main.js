import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        )
        .then((response) => {
          setMovies(response.data.data.movies);
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          smallCoverImage={movie.small_cover_image}
        ></Movie>
      ))}
    </div>
  );
}

export default Main;
