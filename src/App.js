import { Switch, Route } from 'react-router-dom';
import { Container, Sticky } from 'semantic-ui-react';
import Home from './components/shared/Home';
import NavBar from './components/shared/NavBar';
import NoMatch from './components/shared/NoMatch';
import About from './components/about/About';
import MortgageCalc from './components/shared/MorgageCalc'
import Footer from './components/shared/Footer'

const App = () => (
  <>
    <Sticky>
    <NavBar />
    </Sticky>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path='/mortgageCalculator' component={MortgageCalc} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    <Footer />
  </>
)

export default App;