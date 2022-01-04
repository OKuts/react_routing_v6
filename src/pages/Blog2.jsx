import {useNavigate} from "react-router-dom";

export const Blog2 = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>Blog2</h1>
            <button onClick={goBack}>Go back</button>
        </>
    )
}