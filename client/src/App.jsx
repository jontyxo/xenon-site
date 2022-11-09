import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {useContext} from "react";
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);

  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register">
          {user ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
         <Route path="/about">
          <About />
         </Route>
         <Route path="/contact">
          <Contact />
         </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
