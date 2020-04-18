import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react'
import DetailView from "./components/DetailView"
import EnhancedTable from "./components/EnhancedTable"
import { AppBar, Toolbar, Typography, ThemeProvider, Backdrop, CircularProgress } from '@material-ui/core';
import { customTheme } from "./customTheme"

const App = () => {

  return (
    <ThemeProvider theme={customTheme}>
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
          <Route path="/" exact>
            <EnhancedTable />
          </Route>
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
  )}

export default App