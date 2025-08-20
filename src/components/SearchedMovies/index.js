import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MovieCard from '../MovieCard' // Adjust the import path accordingly

const API_KEY = '24742cf21e90d88d7077d04fefaa9503'

const SearchedMovies = () => {
  const {query} = useParams()
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
        )
        const data = await response.json()
        setSearchedMovies(data.results)
      } catch (error) {
        console.error('Error fetching searched movies:', error)
      }
    }

    fetchSearchedMovies()
  }, [query])

  return (
    <div className="searched-movies">
      <h1 className="movies-heading">Search Results for {query}</h1>
      <MovieCard movies={searchedMovies} />
    </div>
  )
}

export default SearchedMovies
