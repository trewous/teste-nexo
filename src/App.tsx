import React from 'react'
import { Router, Route Switch } from 'react-router-dom'
import history from './history'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Game} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
