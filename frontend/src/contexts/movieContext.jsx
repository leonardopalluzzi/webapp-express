import { createContext, useContext, useState, useEffect } from 'react'

const indexEndpoint = 'http://localhost:3000/api/v1/movies/'

const MovieContext = createContext()

function MovieProvider({ children }) {

    //states
    const [movies, setMovies] = useState({
        state: 'loading'
    })



    useEffect(() => {
        fetch(indexEndpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies({
                    state: 'success',
                    movies: data
                })
            })
            .catch(err => {
                console.error(err)
                setMovies({
                    state: 'error',
                    message: err.message
                })

            })
    }, [])
    //funcitons


    //return
    return (
        <>
            <MovieContext.Provider values={{ movies }}>
                {children}
            </MovieContext.Provider>
        </>
    )


}

//custom hook
function useMovieContext() {
    const context = useContext(MovieContext)
    return context
}

//export
export { MovieProvider, useMovieContext }