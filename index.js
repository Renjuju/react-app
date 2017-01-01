import React from 'react'
import { render } from 'react-dom'
import App from './src/components/App'
import Home from './src/components/Home'

import { Router, Route, browserHistory, IndexRoute} from 'react-router'

render((
  <div>
  <Router history={browserHistory}>
     <Route path="/" component={App}>
     <IndexRoute component={Home}/>
    </Route>
  </Router>
  </div>
), document.getElementById('app'))
