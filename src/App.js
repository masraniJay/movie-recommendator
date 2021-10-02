import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  superhero: [
    {
      name: "The Dark Knight Rises",
      rating: "5/5",
      desc:
        "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again."
    },
    {
      name: "Iron Man",
      rating: "4.5/5",
      desc:
        "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world."
    },
    {
      name: "Avengers: Endgame",
      rating: "5/5",
      desc:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
    },
    {
      name: "Captain America: Civil War",
      rating: "4/5",
      desc:
        "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it."
    }
  ],

  fiction: [
    {
      name: "Inception",
      rating: "5/5",
      desc:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son."
    },
    {
      name: "Interstaller",
      rating: "4.5/5",
      desc:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "Tenet",
      rating: "3.5/5",
      desc:
        "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world."
    },
    {
      name: "The Martian",
      rating: "4/5",
      desc:
        "Mark Watney is stranded on the planet of Mars after his crew leaves him behind, presuming him to be dead due to a storm. With minimum supplies, Mark struggles to keep himself alive."
    }
  ],
  animated: [
    {
      name: "The Lion King",
      rating: "5/5",
      desc:
        "Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his."
    },
    {
      name: "Dragon Ball Super: Broly",
      rating: "4.5/5",
      desc:
        "Earth is at peace after The Tournament of Power but Goku continues to train, knowing there are ever-stronger forces in the universe. With the arrival of a Saiyan warrior named Broly, Goku and Vegeta face their most dangerous challenge yet."
    },
    {
      name: "Ice Age: Dawn of The Dinosaur",
      rating: "4.5/5",
      desc:
        "Manny and Ellie are expecting their first child, while Diego plans to move out. Meanwhile, Sid invites trouble by stealing some dinosaur eggs, causing the others to come and save him."
    },
    {
      name: "Cars 2",
      rating: "4/5",
      desc:
        "Star racecar Lightning McQueen and his friend Mater journey abroad to participate in a Grand Prix race. The path to the championship becomes troublesome when Mater gets involved in espionage."
    }
  ],
  comedy: [
    {
      name: "Phir Hera Pheri",
      rating: "5/5",
      desc:
        "The lives of Raju, Shyam and Baburao change completely when they get cheated by a fraudster. Now, they must find another way to repay the loan they took from a dreaded gangster."
    },
    {
      name: "Dhamaal",
      rating: "4.5/5",
      desc:
        "Four lazy friends named Roy, Manav, Aditya and Boman venture out on a race to find a hidden treasure in Goa. However, Inspector Kabir soon learns about their plan and sets out on their trail."
    },
    {
      name: "Welcome",
      rating: "4/5",
      desc:
        "Two thugs meet Rajiv, who belongs to a respectable family, and want to fix their sister's wedding with him. However, when Rajiv's uncle refuses to the match, a series of hilarious situations occur."
    },
    {
      name: "Golmaal",
      rating: "4/5",
      desc:
        "Friends Gopal, Lucky, Madhav and Laxman often dupe gullible people out of their money. Hilarity ensues when they target a middle-aged couple and simultaneously try wooing their beautiful neighbour."
    }
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
              <div style={{ fontSize: "smaller" }}> {movie.desc} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}