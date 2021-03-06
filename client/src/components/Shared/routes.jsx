import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import TripIndexContainer from '../trips/index/tripIndexContainer'
import TripShowContainer from '../trips/show/tripShowContainer'
import TripNewContainer from '../trips/new/tripNewContainer'
import TripEditContainer from '../trips/edit/tripEditContainer'
import UsersIndexContainer from '../users/index/usersIndexContainer'
import SignUpContainer from '../users/signUpContainer'
import SignInContainer from '../sessions/signInContainer'
import NotFoundError from "../Pages/NotFoundError"

const selectRoutes = loggedIn => {
  if (loggedIn) {
    return <div className="container main">
      <Switch>
        <Route path="/trips/:id/edit" component={ TripEditContainer } />
        <Route path="/trips/new" component={ TripNewContainer } exact />
        <Route path="/trips/past" component={TripIndexContainer} exact />
        <Route path="/trips/all" component={TripIndexContainer} exact />
        <Route path="/trips/:id" component={ TripShowContainer } />
        <Route path="/trips" component={ TripIndexContainer } />
        <Route path="/friends" component={ UsersIndexContainer } />
        <Route path="/404" component={ NotFoundError } />
        <Route path="/" component={ TripIndexContainer } />
      </Switch>
    </div>
  } else {
    return (<>
      <Route path="/login" component={ SignInContainer } />
      <Route path="/signup" component={ SignUpContainer } />
      <Route path="/" exact render={ Home } />
    </>)
  }
}

const Routes = ({ loggedIn }) => {
  return selectRoutes(loggedIn)
}

export default Routes