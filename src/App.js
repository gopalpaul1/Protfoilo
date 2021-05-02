import './App.css';
import Home from './Components/Home/Home/Home';
import ContactMe from './Components/ContactMe/ContactMe';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from './Components/About/AboutMe';
import Protfolio from './Components/Protfolio/Protfolio';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/protfolio">
            <Protfolio />
          </Route>
          <Route path="/blogs">
            <Blogs/>
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
