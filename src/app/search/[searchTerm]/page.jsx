import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  console.log(params.searchTerm);
  console.log(process.env.API_KEY);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results.length === 0 && <h1>No Results found for this keyword</h1>}
      <Results results={results} />
    </div>
  );
}
