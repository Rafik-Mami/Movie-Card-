import logo from "./logo.svg";
import "./App.css";
import MovieApp from "./component/movieApp";
import Details from "./component/Details";
import { Route, Switch } from "react-router-dom";
import Home from './component/Home'
import Navbar from './component/NavBar'
function App() {
  return (
    <div className="App">
<Navbar className='navbar'/>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/movieApp" component={MovieApp} />

        <Route path="/movieApp/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
