import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react'
import DetailView from "./components/DetailView"
import EnhancedTable from "./components/EnhancedTable"
import { AppBar, Toolbar, Typography, } from '@material-ui/core';

const App = () => {
  return (
    <Router>
    <div className="app">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          ZusammenAlleinImVerein
        </Typography>
      </Toolbar>
    </AppBar>
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