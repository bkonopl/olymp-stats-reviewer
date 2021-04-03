import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Profile, Search } from './modules'
import { Providers } from './providers'

import 'src/styles/index.css'
import 'src/styles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Providers>
    <BrowserRouter>
      <Switch>
        <Route component={Profile} path="/profile/:id" />
        <Route component={Search} path="/" />
      </Switch>
    </BrowserRouter>
  </Providers>,
  document.getElementById('root'),
)
