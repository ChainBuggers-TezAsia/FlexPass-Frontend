import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import MovieCard from "./Movie";
export default function CardBase() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const x =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRhOGFhNTk5NjRlMGRlYWMyZDU1NzIiLCJpYXQiOjE2OTI0ODg3NDMsImV4cCI6MTY5MjQ5MjM0M30.-lUvKPStId5c7E5_BO4PkkggNI0L9L0cEiZIdqQucaI";
  useEffect(() => {
    axios({
      method: "get",
      url: `https://flexpass-back.onrender.com/movie/getAllMovies`,
      headers: {
        Authorization: `Bearer ${x}`,
      },
    })
      .then((response) => {
        // setSplitInto(response.data.userNames)
        console.log("data", response.data);

        setMovies(response.data);
        console.log("state", movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [0]);

  return (
    <div className="text-white capitalize font-semibold  text-[4rem]">
      <span className="p-20">Movies</span>

      <div className="grid grid-cols-3 justify-items-start ">
        {movies.map((movie) => {
          return (
            <div onClick={()=>{
              navigate('/theatreSelection',{state:movie});
            }}>
              {/* <Link
                to={{
                  pathname: "/theatreSelection",
                  state: {id:1, name:"name"} ,
                }}
              > */}
                <MovieCard
                  name={movie.name}
                  image={movie.image}
                  release={movie.release}
                />
              {/* </Link> */}
            </div>
          );
        })}

        {/* <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </div>
    </div>
  );
}
