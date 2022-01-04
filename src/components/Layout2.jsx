import {NavLink, Outlet} from "react-router-dom";
import {Nav} from "./Nav";

export const Layout2 = () => {
    return (
        <>
            <Nav/>
            <br/>
            <nav>
                <NavLink to="/home/about">About</NavLink>
                <NavLink to="/home/blog">Blog</NavLink>
            </nav>

            <Outlet/>

            <footer>Footer</footer>
        </>
    )
}