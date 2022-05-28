//Dependencies
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../assets/stylesheets/sass/main.scss'

//Components
import Navbar from './utilities/navbar/Navbar';
import Body from './Body';
//import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {

  return (
    <>
     <Body>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Router>
     </Body>
    </>
  );
}

export default App;
