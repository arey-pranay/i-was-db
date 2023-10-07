import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer bg-slate-200 dark:bg-transparent p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg dark:border border-slate-400 m-5 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-50 transition-opacity duration-500"
          alt="no image found sry"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/loadingTriangle2.svg"
        />
        <div className="p-2">
          <h2 className="text-lg font-medium line-clamp-2 text-purple-800 dark:text-purple-300">
            {result.name || result.title}
          </h2>
          <p className="line-clamp-2 text-md my-2">{result.overview}</p>
          <div className="flex items-center justify-between pr-2 gap-5 text-xs text-purple-500">
            {" "}
            <p>{result.release_date || result.first_air_date}</p>
            <p className="flex items-center gap-1">
              <BsFillHandThumbsUpFill /> {result.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
