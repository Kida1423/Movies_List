import React from "react";

interface AddMovieProps {
  currentMovie: string;
  setCurrentMovie: (movie: string) => void;
  addMovie: () => void;
}

const AddMovie: React.FC<AddMovieProps> = ({ currentMovie, setCurrentMovie, addMovie }) => {
  return (
    <div className="App">
      <input
        type="text"
        value={currentMovie}
        onChange={(e) => setCurrentMovie(e.target.value)}
      />
      <button onClick={addMovie}>Add</button>
    </div>
  );
};

export default AddMovie;
