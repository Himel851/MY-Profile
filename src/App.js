import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from "./components/About.js"
import contact from "./components/Contact.js"
import portfolio from "./components/Portfolio.js"
import skill from "./components/Skill.js"
import navPic from "./images/navpic.png"
import ImgSlider from "./components/Sliders.js"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light p-3 mb-2 bg-secondary ">
            <div className="container-fluid">
              <a class="navbar-brand navpic" href="#">
                <img src={navPic} class="d-inline-block align-text-top" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/skill">Skill</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Me</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
          
         
          
        </header>
       

        <Switch>

          <Route exact path="/" >
          <ImgSlider />
          </Route>
          <Route path="/skill" component={skill}>
          </Route>
          <Route path="/portfolio" component={portfolio}>

          </Route>
          <Route path="/about" component={about}>

          </Route>
          <Route path="/contact" component={contact}>

          </Route>

        </Switch>
      </div>
      


      

    </Router>

  );
}

export default App;
