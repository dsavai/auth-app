import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { ContextProvider } from "./context"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <ContextProvider>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </ContextProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
