import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react'
import EnhancedTable from "./components/EnhancedTable"

const App = () => {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/login">
          <EnhancedTable />
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