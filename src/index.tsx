import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Contribute, FAQ, Home, Profile, Search } from './modules'
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
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  </Providers>,
  document.getElementById('root'),
)
