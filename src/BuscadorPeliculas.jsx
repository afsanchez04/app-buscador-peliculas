import { useState } from "react"
import { usePeliculasFetch } from "./hooks/usePeliculasFetch"
import { getImageUrl } from "./helpers/getImageUrl"


export const BuscadorPeliculas = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '456769de038a8e70d9da88044e24f4a7'

    const {busqueda, peliculas, handleInputChange, fetchPelicula} = usePeliculasFetch(urlBase, API_KEY)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (busqueda.length > 0) fetchPelicula()
        console.log(peliculas)
    }

    return (
        <div className="container">
            <h1>Buscador de peliculas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={busqueda}
                    placeholder="Buscar pelicula"
                    onChange={handleInputChange}
                />
                <button className="search-button" type="submit">Buscar</button>
            </form>
            <div className="movie-list">
                {
                    peliculas && (

                        peliculas.map(pelicula => {
                            return (
                                <div key={pelicula.id} className="movie-card">
                                    <img src={ getImageUrl(pelicula.poster_path) } alt={pelicula.title} />
                                    <h2>{pelicula.title}</h2>
                                    <h3>Year: {pelicula.release_date}</h3>
                                    <p>{pelicula.overview}</p>
                                </div>
                            )
                        })

                    )
                }
            </div>
        </div>
    )
}
