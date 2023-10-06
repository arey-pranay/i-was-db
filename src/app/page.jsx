import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTrending" ? "trending/all/week" : "movie/top_rated"
    }?api_key=${API_KEY}&language=en-US&page=1
  `, //this will check if your server had a fetch request to API in the past 1 Lakh seconds, so it will just use the server data, and will not create a new request to te API, it will save the number of AI calls for you
    { next: { revalidate: 100000 } }
  );
  // console.log(res);
  const data = await res.json();
  const results = data.results;
  // console.log(results[0].original_title);
  return <Results results={results} />;
}
