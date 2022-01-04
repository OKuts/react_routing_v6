import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Layout2} from "./components/Layout2";
import {About2} from "./pages/About2";
import {Blog2} from "./pages/Blog2";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="blog" element={<Blog />}/>
                    <Route path="*" element={<Home />}/>
                </Route>
                <Route path="/home" element={<Layout2 />}>
                    <Route index element={<About2 />}/>
                    <Route path="blog" element={<Blog2 />}/>
                    <Route path="*" element={<About2 />}/>
                </Route>
            </Routes>
        </>
    )
}