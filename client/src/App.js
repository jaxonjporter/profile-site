import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './component/Home'
import Navbar from './component/Navbar/Navbar'
import NoMatch from './component/NoMatch'
import { Container } from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
      <Container>
      </Container>
    </>
  );
}



export default App;
