//Dependencies
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../assets/stylesheets/sass/main.scss'

//Components
//import Navbar from './utilities/navbar/Navbar';
import Body from './Body';
import Footer from './Footer';
//import Footer from './Footer';
import Home from './pages/home/Home';

const App = () => {

  return (
    <>
     <Body>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
          <Footer />
        </Router>
     </Body>
    </>
  );
}

export default App;
