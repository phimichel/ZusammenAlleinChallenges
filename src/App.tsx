import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react'
import DetailView from "./components/DetailView"
import EnhancedTable from "./components/EnhancedTable"

const App = () => {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/view/:id">
          <DetailView />
        </Route>
        <Route path="/dashboard">
          <EnhancedTable />
        </Route>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}
 
export default App