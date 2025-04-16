import useMovieShow from "../../hooks/useMovieShow";
import CommentsUi from "../dumb/Comments.ui";

export default function Comments({ id }) {

    console.log(id);

    const { singleMovie } = useMovieShow({ id })
    console.log(singleMovie);


    switch (singleMovie.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>{singleMovie.state}</h1>
                    <span>{singleMovie.message}</span>
                </>
            )
        case 'success':
            return (
                <>
                    {
                        singleMovie.movie.reviews.map(item => (
                            <CommentsUi
                                username={item.name}
                                text={item.text}
                                vote={item.vote}
                            />
                        ))
                    }

                </>
            )
    }
}