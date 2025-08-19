import {Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'

import MovieDetails from './components/MovieDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/upcoming" component={Upcoming} />
    <Route exact path="/movie/:id" component={MovieDetails} />
  </Switch>
)

export default App
