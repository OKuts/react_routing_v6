import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </nav>
    )
}