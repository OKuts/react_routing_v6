import {useNavigate} from "react-router-dom";

export const Blog = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>Blog</h1>
            <button onClick={goBack}>Go back</button>
        </>
    )
}