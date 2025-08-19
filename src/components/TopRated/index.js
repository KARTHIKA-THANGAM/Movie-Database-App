import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import Header from '../Header'

import MovieCard from '../MovieCard'

const diffStates = {
  inProgress: 'LOADING',
  success: 'SUCCESS',
  fail: 'FAILURE',
}
class TopRated extends Component {
  state = {
    status: diffStates.inProgress,
    movieData: [],
    searchList: [],
  }

  componentDidMount = async () => {
    const API_KEY = '24742cf21e90d88d7077d04fefaa9503'
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      )
      const data = await response.json()
      const updatedData = data.results.map(each => ({
        adult: each.adult,
        backdropPath: each.backdrop_path,
        genreIds: each.genre_ids,
        id: each.id,
        originalLanguage: each.original_language,
        originalTitle: each.original_title,
        overview: each.overview,
        popularity: each.popularity,
        posterPath: each.poster_path,
        releaseDate: each.release_date,
        title: each.title,
        video: each.video,
        voteAverage: each.vote_average,
        voteCount: each.vote_count,
      }))

      this.setState({status: diffStates.success, movieData: updatedData})
    } catch (error) {
      this.setState({status: diffStates.fail})
    }
  }

  handleSearchInputList = value => {
    const {movieData} = this.state
    // console.log(movieData)
    const searchInputList = movieData.filter(eachMovie =>
      eachMovie.title.toLowerCase().includes(value),
    )
    // console.log(searchInputList)
    // return searchInputList
    this.setState({searchList: searchInputList})
  }

  renderSuccessView = () => {
    const {movieData, searchList} = this.state
    const moviesList = searchList.length === 0 ? movieData : searchList
    return (
      <div className="movies-container">
        <h1 className="heading">Popular Movies</h1>
        <ul className="movies-list-container">
          {moviesList.map(each => (
            <MovieCard key={each.id} movieDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderDiffrentViews = () => {
    const {status} = this.state
    switch (status) {
      case diffStates.inProgress:
        return this.renderLoader()
      case diffStates.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="top-rated-container">
        <Header handleSearchInputList={this.handleSearchInputList} />
        {this.renderDiffrentViews()}
      </div>
    )
  }
}

export default TopRated
