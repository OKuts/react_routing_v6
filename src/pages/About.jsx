import {useLocation} from "react-router-dom";

export const About = () => {
    const location = useLocation()

    console.log(location)

    return (
        <>
            <h1>About</h1>
        </>
    )
}