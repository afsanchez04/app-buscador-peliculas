import { useState } from "react"


export const usePeliculasFetch = (urlBase, API_KEY) => {

    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState(null)

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const fetchPelicula = async () => {
        try {
            //https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=456769de038a8e70d9da88044e24f4a7
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            const data = await response.json()
            setPeliculas(data.results)
        } catch (error) {
            console.error('Error: ', error)
        }
    }

  return {
    busqueda,
    peliculas,
    handleInputChange,
    fetchPelicula
  }
}
