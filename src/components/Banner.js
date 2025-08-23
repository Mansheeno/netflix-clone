import { useEffect, useState } from "react";
import { tmdb, endpoints, imgBase } from "../api/tmdb";
import "../styles/banner.css";


export default function Banner(){
const [movie, setMovie] = useState(null);


useEffect(()=>{
(async ()=>{
const { data } = await tmdb.get(endpoints.trending);
const pick = data.results[Math.floor(Math.random()*data.results.length)];
setMovie(pick);
})();
},[]);


if(!movie) return null;


const backdrop = movie.backdrop_path ? `${imgBase("w1280")}${movie.backdrop_path}` : "";


return (
<section className="banner" style={{backgroundImage:`url(${backdrop})`}}>
<div className="banner__shade">
<div className="container banner__content">
<h1 className="banner__title">{movie.title}</h1>
<p className="banner__desc">{movie.overview}</p>
<div className="banner__actions">
<a className="btn btn--primary" href={`/movie/${movie.id}`}>Play</a>
<a className="btn" href={`/movie/${movie.id}`}>More Info</a>
</div>
</div>
</div>
</section>
);
}