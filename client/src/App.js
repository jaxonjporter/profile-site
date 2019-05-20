import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './component/Home'
import Navbar from './component/Navbar/Navbar'
import NoMatch from './component/NoMatch'
import { Container } from './styles/GlobalStyles'
import Contact from './component/contact/contact'
import About from './component/about/About'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NoMatch}  />
      </Switch>
      <Footer />
      <Container>
      </Container>
    </>
  );
}



export default App;
