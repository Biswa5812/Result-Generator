import React from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Homes from "./Components/home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Admin from "./Components/Admin";
import Faculty from "./Components/Faculty";

const App = () =>
{
  return(
        <div>
          <Header/>
            <Switch>
              <Route path="/" exact>
                <Homes/>
              </Route>
              <Route path="/admin934=i4" exact>
                <Admin/>
              </Route>
              <Route path="/faculty">
                <Faculty/>
              </Route>
            </Switch>
          <Footer/>
        </div>
      // </Router>
  );
};

export default App;
