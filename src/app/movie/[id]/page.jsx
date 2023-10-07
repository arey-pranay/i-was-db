import Image from "next/image";
import React from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";
async function getMovie(movieID) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`
  );
  console.log(movieID);
  console.log(process.env.API_KEY);
  const a = await res.json();
  console.log(a.adult);
  return await a;
}

export default async function MoviePage({ params }) {
  const movieID = params.id;
  const movie = await getMovie(movieID);
  console.log(movie.original_title);
  return (
    <div className="w-full p-10">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg border-4 border-slate-400 "
          alt="The location might have been shifted in the original database, really sorry for the inconvenience"
          style={{
            maxWidth: "50%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />{" "}
        <div className="flex flex-col gap-4">
          {" "}
          <h1 className="mb-4 font-bold text-4xl">{movie.original_title}</h1>
          <p className="text-purple-700 dark:text-purple-200">
            {movie.overview}
          </p>
          <p className="text-purple-500 dark:text-purple-300">
            Date Released: &nbsp;{movie.release_date || movie.first_air_date}
          </p>
          <p className="text-purple-400 flex items-center gap-1">
            {" "}
            Rating: &nbsp; {movie.vote_count} <BsHandThumbsUpFill />
          </p>
        </div>
      </div>
    </div>
  );
}
