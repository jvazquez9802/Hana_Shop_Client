//Dependencies
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import MainContainer from './main/MainContainer';


const App = () => {

  return (
    <>
      <Header />
     <Body>
        <Router>
          <Switch>
            <Route exact path="/" component={MainContainer}/>
          </Switch>
        </Router>
     </Body>
     <Footer />
    </>
  );
}

export default App;
