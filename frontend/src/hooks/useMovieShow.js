import { useEffect, useState } from 'react'

export default function useMovieShow({ id }) {

    const [singleMovie, setSingleMovie] = useState({
        state: 'loading'
    })

    const showEndpoint = `http://localhost:3000/api/v1/movies/${id}`

    useEffect(() => {
        fetch(showEndpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSingleMovie({
                    state: 'success',
                    movie: data
                })

            })
            .catch(err => {
                console.error(err)
                setSingleMovie({
                    state: 'error',
                    message: err.message
                })
            })
    }, [])
    console.log(id);


    return { singleMovie }

}