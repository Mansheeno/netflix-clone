import { useEffect, useState, useRef } from "react";
import { tmdb } from "../api/tmdb";
import MovieCard from "./MovieCard";
import "../styles/row.css";

export default function Row({ title, path }) {
  const [items, setItems] = useState([]);
  const scrollerRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await tmdb.get(path);
        setItems(data.results || []);
      } catch (err) {
        console.error("Failed to fetch row:", err);
      }
    })();
  }, [path]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="row container">
      <h2 className="row__title">{title}</h2>
      <div className="row__wrap">
        <button
          className="row__btn row__btn--left"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <div className="row__scroller" ref={scrollerRef}>
          {items.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
        <button
          className="row__btn row__btn--right"
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
}
