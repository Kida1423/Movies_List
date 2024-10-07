import React, { useState, useEffect } from "react";
import AddMovie from "./components/AddMovie";
import MovieItem from "./components/Movie";
import "./App.css";

interface MovieType {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [currentMovie, setCurrentMovie] = useState<string>("");
  const [editingMovieId, setEditingMovieId] = useState<number | null>(null);

  useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);
  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem("movies", JSON.stringify(movies));
    }
  }, [movies]);

  const addMovie = () => {
    if (currentMovie.trim() !== "") {
      if (editingMovieId === null) {
        const newMovie = {
          id: Date.now(),
          name: currentMovie,
        };
        setMovies([...movies, newMovie]);
      } else {
        setMovies(
          movies.map((movie) =>
            movie.id === editingMovieId ? { ...movie, name: currentMovie } : movie
          )
        );
        setEditingMovieId(null);
      }
      setCurrentMovie("");
    }
  };

  const removeMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const startEditing = (id: number, name: string) => {
    setEditingMovieId(id);
    setCurrentMovie(name);
  };

  return (
    <div id="root">
      <div className="list_app">
        <h1>Movie List</h1>
        <AddMovie currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} addMovie={addMovie} />
        <div className="movie_list">
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              name={movie.name}
              removeMovie={removeMovie}
              startEditing={startEditing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
