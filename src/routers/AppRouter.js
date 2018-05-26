import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ChampionsPage from '../components/ChampionsPage'
import NotFoundPage from '../components/NotFoundPage'
import WelcomePage from '../components/WelcomePage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/champions' component={ChampionsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
