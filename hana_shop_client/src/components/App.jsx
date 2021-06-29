//Dependencies
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import MainContainer from './main/MainContainer';
import About from './main/About';
import Contact from './main/Contact';

const App = () => {

  return (
    <>
      <Header />
     <Body>
        <Router>
          <Switch>
            <Route exact path="/" component={MainContainer}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Router>
     </Body>
    </>
  );
}

export default App;
