import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  superhero: [
    { name: "The Dark Knight Rises", rating: "5/5" },
    { name: "Iron Man", rating: "4.5/5" },
    { name: "Avengers: Endgame", rating: "5/5" },
    { name: "Captain America: Civil War", rating: "4/5" }
  ],

  fiction: [
    { name: "Inception", rating: "5/5" },
    { name: "Interstaller", rating: "4.5/5" },
    { name: "Tenet", rating: "3.5/5" },
    { name: "The Martian", rating: "4/5" }
  ],
  animated: [
    { name: "The Lion King", rating: "5/5" },
    { name: "Dragon Ball Super: Broly", rating: "4.5/5" },
    { name: "Ice Age: Dawn of The Dinosaur", rating: "4.5/5" },
    { name: "Cars 2", rating: "4/5" }
  ],
  comedy: [
    { name: "Phir Hera Pheri", rating: "5/5" },
    { name: "Dhamaal", rating: "4.5/5" },
    { name: "Welcome", rating: "4/5" },
    { name: "Golmaal", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("superhero");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movies Recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
