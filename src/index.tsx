import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Contribute, FAQ, Profile, Search } from './modules'
import { Providers } from './providers'

import 'src/styles/index.css'

ReactDOM.render(
  <Providers>
    <BrowserRouter>
      <Switch>
        <Route component={Contribute} path="/contribute" />
        <Route component={FAQ} path="/faq" />
        <Route component={Profile} path="/profile/:id" />
        <Route component={Search} path="/search" />
        <Redirect to="/search" />
      </Switch>
    </BrowserRouter>
  </Providers>,
  document.getElementById('root'),
)
