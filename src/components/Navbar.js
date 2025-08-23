import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";


export default function Navbar(){
const navigate = useNavigate();
const onSubmit=(e)=>{e.preventDefault();
const q = new FormData(e.currentTarget).get("q");
navigate(`/search?q=${encodeURIComponent(q)}`);
};
return (
<header className="nav">
<div className="container nav__inner">
<Link className="nav__brand" to="/">
<img src="/logo.svg" alt="logo" height="24" />
<span>Netflix</span>
</Link>
<nav className="nav__links">
<NavLink to="/" end>Home</NavLink>
<a href="https://www.netflix.com/latest" target="_blank" rel="noreferrer">Latest</a>
</nav>
<form className="nav__search" onSubmit={onSubmit}>
<input name="q" placeholder="Search" />
</form>
</div>
</header>
);
}