import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './component/Home'
import Navbar from './component/Navbar'
import { Container } from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <Navbar />
        <Route exact path='/' component={Home} />
      <Container>
      </Container>
    </>
  );
}



export default App;
