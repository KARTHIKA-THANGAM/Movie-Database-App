// App.js
import './App.css'
// import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import PopularMovies from './components/PopularMovies'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import MovieDetails from './components/MovieDetails'
import SearchedMovies from './components/SearchedMovies'

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={PopularMovies} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Route exact path="/movie/:id" component={MovieDetails} />
        <Route exact path="/search/:query" component={SearchedMovies} />
      </Switch>
    </div>
  </Router>
)

export default App
