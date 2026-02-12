import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element, artwork, loading, onRestart }) {
  const { name } = useContext(UserContext);

  return (
    <div>
      <h2>{name}, you are {element} 🔥</h2>

      {loading && <p>Finding your masterpiece...</p>}

      {!loading && artwork && (
        <img src={artwork} alt="Artwork" width="300" />
      )}

      {!loading && !artwork && (
        <p>No artwork found.</p>
      )}

      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}
