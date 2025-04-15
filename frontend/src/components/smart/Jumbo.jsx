import JumboUi from "../dumb/Jumbo.ui.jsx";
import useMovieShow from "../../hooks/useMovieShow.js";
import { useMovieContext } from '../../contexts/movieContext.jsx';

export default function Jumbo() {

    //rivedere collegamento con id nel custom hook
    let id = 1
    const { singleMovie, setMovieId } = useMovieShow({ id });
    console.log(singleMovie);

    // fare componente review che scorre le revciew per ogni film

    //usare rotta index per mostrare i film nel jumbo
    const { movies } = useMovieContext()

    //recupoerare i commenti nel relativo componente con la rotta show


    switch (movies.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>{movies.state}</h1>
                    <span>{movies.message}</span>
                </>
            )
        case 'success':
            //fare map, creare commenti container, pasare id dal map e chiamare hook per fetch show
            return (
                <>
                    <JumboUi
                        comments={<Commenti id={item.id />}
                            image={movies.movies.image}
                            title={movies.movies.title}
                            content={movies.movies.abstract}
                        />
                </>
            )
    }
}