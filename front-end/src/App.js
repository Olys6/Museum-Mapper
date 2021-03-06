import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import MuseumsIndex from './components/MuseumIndex'
import MuseumShow from './components/MuseumShow'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Profile from './components/Profile'
import FilteredMuseums from './components/FilteredMuseums'
import Map from './components/Map'
import StandoutExhibit from './components/StandoutExhibit'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="site-wrapper">
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/museums' component={MuseumsIndex} />
          <Route exact path='/museums/:id' component={MuseumShow} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route exact path='/filteredmuseums' component={FilteredMuseums} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/map' component={Map} />
          <Route exact path='/exhibits' component={StandoutExhibit} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App