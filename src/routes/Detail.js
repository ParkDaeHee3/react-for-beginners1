import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css"; // Assuming the CSS is saved in a file named Detail.css

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{movie.title}</h1>
      <p className="detail-info">
        <strong>Title (long):</strong> {movie.title_long}
      </p>
      <p className="detail-info">
        <strong>Year:</strong> {movie.year}
      </p>
      <p className="detail-info">
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p className="detail-info">
        <strong>Runtime:</strong> {movie.runtime} minutes
      </p>
      <p className="detail-info">
        <strong>Genres:</strong> {movie.genres.join(", ")}
      </p>
      <p className="detail-info">
        <strong>Description:</strong> {movie.description_full}
      </p>
      <p className="detail-info">
        <strong>Language:</strong> {movie.language}
      </p>
      <p className="detail-info">
        <strong>MPA Rating:</strong> {movie.mpa_rating}
      </p>
      <p className="detail-info">
        <strong>Download Count:</strong> {movie.download_count}
      </p>
      <p className="detail-info">
        <strong>Like Count:</strong> {movie.like_count}
      </p>
      <div className="detail-cast">
        <strong>Cast:</strong>
        <ul>
          {movie.cast &&
            movie.cast.map((member) => (
              <li key={member.imdb_code}>
                {member.name} as {member.character_name}
              </li>
            ))}
        </ul>
      </div>
      <div className="detail-images">
        <img src={movie.medium_cover_image} alt={movie.title} />
        <p>
          <strong>Background Image:</strong>
        </p>
        <img src={movie.background_image} alt={`${movie.title} background`} />
      </div>
    </div>
  );
}

export default Detail;

/* import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null); // State to hold movie details
  const [loading, setLoading] = useState(true); // State to manage loading status

  const getMovie = useCallback(async () => {
    setLoading(true); // Set loading to true before fetching data
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie); // Set the movie details in state
    setLoading(false); // Set loading to false after fetching data
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  if (loading) {
    return <h1>Loading...</h1>; // Display loading message while fetching data
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>
        <strong>Title (long):</strong> {movie.title_long}
      </p>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.runtime} minutes
      </p>
      <p>
        <strong>Genres:</strong> {movie.genres.join(", ")}
      </p>
      <p>
        <strong>Description:</strong> {movie.description_full}
      </p>
      <p>
        <strong>Language:</strong> {movie.language}
      </p>
      <p>
        <strong>MPA Rating:</strong> {movie.mpa_rating}
      </p>
      <p>
        <strong>Download Count:</strong> {movie.download_count}
      </p>
      <p>
        <strong>Like Count:</strong> {movie.like_count}
      </p>
      <p>
        <strong>Cast:</strong>
      </p>
      <ul>
        {movie.cast &&
          movie.cast.map((member) => (
            <li key={member.imdb_code}>
              {member.name} as {member.character_name}
            </li>
          ))}
      </ul>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>
        <strong>Background Image:</strong>
      </p>
      <img src={movie.background_image} alt={`${movie.title} background`} />
    </div>
  );
}

export default Detail; */

/* import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }, [id]); 

  useEffect(() => {
    getMovie();
  }, [getMovie]); 

  return <h1>Detail</h1>;
}

export default Detail; */
