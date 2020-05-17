import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Landingpage from "./Components/Landing/Landing";
import Form from "./Components/Form/Form";
import PublicRoute from "./Route/Publicroute";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute component={Landingpage} path="/" exact />
          <PublicRoute component={Form} path="/form" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

