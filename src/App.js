
import './App.css';
import Blog from "./components/Blogs";
import Singlepages from "./components/Single-page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      

      <Router>
      <div>
        
        <nav>
          <ul>
            <li className="menu">
              <Link to="/blog">Blogs</Link>
            </li>
           
            
          </ul>
        </nav>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/blog"><Blog /></Route>
          <Route path="/blog/:id"><Singlepages/></Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
