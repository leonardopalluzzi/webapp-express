import JumboUi from "../dumb/Jumbo.ui.jsx";
import Comments from "./Comments.jsx";
import CarouselUi from "../dumb/Carousel.ui.jsx";
import { useMovieContext } from '../../contexts/movieContext.jsx';

export default function Jumbo() {


    const { movies } = useMovieContext()


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
                    {
                        movies.movies.map(item => (
                            <JumboUi
                                comments={<Comments id={item.id} />}
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                content={item.abstract}
                            />
                        ))
                    }
                </>


            )
    }
}