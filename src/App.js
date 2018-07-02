import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container, Nav, NavItem } from 'reactstrap';
import PuppyListContainer from './containers/PuppyListContainer';
import PuppyPageContainer from './containers/PuppyPageContainer';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { fetchPuppies } from './actions';


const Home = () => (
  <Jumbotron>
    <Container>
      <h1>Pug Life</h1>
      <p className="lead">Poo what you gotta poo.</p>
    </Container>
  </Jumbotron>

)

const PuppiesPage = () => (
  <Container>
    <PuppyListContainer />
  </Container>
)

const styles = {
  activeNav: {color: '#ccc'},
  nav: { padding: '20px' }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchPuppies();
  }
  render() {
    return (
      <Router className="App">
        <div>
          <Container>
            <Nav>
              <NavItem>
                <NavLink to="/" activeStyle={styles.activeNav}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/puppies" activeStyle={styles.nav}>Puppies</NavLink>
              </NavItem>
            </Nav>          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/puppies" component={PuppiesPage} />
              <Route path="/puppies/:id" component={PuppyPageContainer} />
              <Route render={() => <h1>Page Not Found, Bitch!</h1>} />
            </Switch>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/puppies">Puppies</Link>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchPuppies: () => dispatch(fetchPuppies())}
}

export default connect(null, mapDispatchToProps)(App);