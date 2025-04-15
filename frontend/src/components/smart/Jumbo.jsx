import JumboUi from "../dumb/Jumbo.ui.jsx";
import useMovieShow from "../../hooks/useMovieShow.js";
import { useMovieContext } from '../../contexts/movieContext.jsx';

export default function Jumbo() {

    //rivedere collegamento con id nel custom hook

    const { movies } = useMovieContext();
    let id = 1;

    switch (movies.state) {
        case 'laoding':
            return (
                <>
                    <h1>loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>error...</h1>
                </>
            )
        case 'success':
            const moviesLength = movies.movies.length

            const timer = setInterval(() => {
                while (id < moviesLength) {
                    id++ //cambaire con il setter??
                }
                id = 1
            }, 2000)
    }


    const { singleMovie, setMovieId } = useMovieShow({ id });
    console.log(singleMovie);

    // fare componente review che scorre le revciew per ogni film




    switch (singleMovie.state && movies.state) {
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
                    <JumboUi
                        image={singleMovie.movie.image}
                        title={singleMovie.movie.title}
                        content={singleMovie.movie.abstract}

                    />
                </>
            )
    }
}