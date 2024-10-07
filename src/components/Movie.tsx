import React from "react";
import Edit from "./../assets/edit_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg"
import Delete from "./../assets/delete_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg"

interface MovieItemProps {
  id: number;
  name: string;
  removeMovie: (id: number) => void;
  startEditing: (id: number, name: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ id, name, removeMovie, startEditing }) => {
  return (
    <div className="movieList">
      <span>{name}</span>
      <div className="btns">
        <button onClick={() => startEditing(id, name)}> <img src={Edit} alt="edit" /></button>
        <button onClick={() => removeMovie(id)}> <img src={Delete} alt="delete" /></button>
      </div>
    </div>
  );
};

export default React.memo(MovieItem);
