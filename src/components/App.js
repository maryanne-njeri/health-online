import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Conditions from "./Conditions";
import Navbar from "././Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />    
        </Route>

        <Route exact path="/conditions">
          <Conditions />
        </Route>
      </Switch>     
    </div>
  );
}

export default App;
