import { Route, Switch } from "react-router-dom";
import About from "./About";
// import Home from "./Home";
import Condition from "./Condition";
import Navbar from "././Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" />
          {/* <Home /> */}
        {/* </Route> */}

        <Route exact path="/about">
          <About />    
        </Route>

        <Route exact path="/conditions">
          <Condition />
        </Route>
      </Switch>    
        <h1>Helo world</h1>
  </div>
  );
}

export default App;
