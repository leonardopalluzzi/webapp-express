export default function CommentsUi({ username, text, vote }) {

    return (

        <>
            <h1>{username}</h1>
            <span>{text}</span>
            <span>{vote}</span>
        </>
    )
}